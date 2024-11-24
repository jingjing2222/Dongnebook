import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { supabase } from './utils/SupabaseClient'


function App() {
    const [members, setMembers] = useState([]);
  
    const fetchMembers = async () => {
        const { data} = await supabase
          .from('members')
          .select('*');
          setMembers(data);
        
    };

  return (
    <>
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
    </>
  )
}

export default App