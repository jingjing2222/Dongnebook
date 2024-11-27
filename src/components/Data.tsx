import { useState } from "react";
import { supabase } from "@/utils/SupabaseClient";
import { Button } from "./ui/button";
import { useQuery,useQueryClient,useMutation} from "@tanstack/react-query";

type Member = {
	member_id: number;
	name: string;
	nickname: string;
	email: string;
	age: number;
	role: string;
	participation: boolean;
};

// 데이터 가져오기 함수
const fetchMembers = async () => {
	const { data, error } = await supabase.from('members').select('*');
	if (error) throw new Error(error.message);
	return data;
};

const addMembers=async (member:Member) =>{
    const {error} =await supabase.from('members').insert(member);
	if (error) throw new Error(error.message);
}

const deleteMembers=async(member_id:number) =>{
    const {error}=await supabase.from('members').delete().eq('member_id',member_id);
	if (error) throw new Error(error.message);
}

export default function Data() {

    const queryClient=useQueryClient();

	// useQuery로 데이터 가져오기
	const { data: members = [], isLoading, error, refetch } = useQuery({
		queryKey: ['members'], // 쿼리 키를 객체로 전달
		queryFn: fetchMembers, // fetcher 함수
	});

    const addMutation = useMutation({
		mutationFn: addMembers, // 추가 작업
		onSuccess: () => {
			console.log("Member added successfully!");
		},
		onError: (error) => {
			console.error("Error adding member:", error);
		},
	});

    const deleteMutation=useMutation({
        mutationFn:deleteMembers,
        onSuccess:()=>{
            console.log('delete success');
        },
        onError:(error)=>{
            console.error('Error delete',error);
        },
    });

    const [newMember, setNewMember] = useState<Member>({
		member_id: 0,
		name: "",
		nickname: "",
		email: "",
		age: 0,
		role: "",
		participation: false,
	});
    const [deleteMember,setDeleteMember] = useState<number>(0);

	return (
		<div>
			<Button onClick={() => refetch()}>동네북</Button>
			{isLoading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Error: {error.message}</p>
			) : (
				<div>
					{members.map((member: Member) => (
						<div key={member.member_id}>
							<p>ID: {member.member_id}</p>
							<p>Name: {member.name}</p>
						</div>
					))}
				</div>
			)}
            {/* 추가 작업 */}
			<h2>Add Member</h2>
			<input
				type="text"
				placeholder="Name"
				value={newMember.name}
				onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
			/>
			<Button onClick={() => addMutation.mutate(newMember)}>
				{addMutation.isLoading ? "Adding..." : "Add Member"}
			</Button>
            <br/>
            <h2>Delete Member</h2>
            <input
            className="bg-white"
            type="number"
            placeholder="member_id"
            value={deleteMember}
            onChange={(e) => setDeleteMember(Number(e.target.value))}>
            </input>
            <Button onClick={()=>deleteMutation.mutate(deleteMember)}>
                {deleteMutation.isLoading ? "Adding..." : "Delete member"}
            </Button>
		</div>
	);
}
