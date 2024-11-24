import {useState} from "react";
import { supabase } from "@/utils/SupabaseClient";
import { Button } from "./ui/button";

export default function Data(){
    const [members, setMembers] = useState([]);
  
    const fetchMembers = async () => {
        const {data} = await supabase
            .from('members')
            .select('*');
            setMembers(data);
            
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