import {useState} from "react";
import { supabase } from "@/utils/SupabaseClient";
import { Button } from "./ui/button";

export default function Data(){
    type Member={
        member_id:number;
        name:string;
        nickname:string;
        email:string;
        age:number;
        role:string;
        participation:boolean;
    };
    const [members, setMembers] = useState<Member[]|[]>([]);

    const fetchMembers = async ():Promise<void> => {
        const {data} = await supabase
            .from('members')
            .select('*');
            if (data) {
                setMembers(data); // 데이터가 존재하는 경우 설정
            } else {
                setMembers([]); // null일 경우 빈 배열로 설정
            }
            
    };

    return(
            <div>
                <Button onClick={fetchMembers}>동네북</Button>
                <div>
                    {members.map((member, index) => (
                    <div key={index}>
                        <p>ID: {member.member_id}</p>
                        <p>Name: {member.name}</p>
                    </div>
                    ))}
                </div>
        </div>
    );
}