import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'
import { supabase } from "@/utils/SupabaseClient"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useQuery } from "@tanstack/react-query"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Link} from '@tanstack/react-router'

const fetchMembers = async () => {
	const { data, error } = await supabase.from('members').select('username');
	if (error) throw new Error(error.message);
	return data;
};

const searchMembers=async(username:string)=>{
    const dbId:string[] = fetchMembers;
    const userExists = dbId.some((member) => member.username === username);
        if (userExists) {
            const { data: dbPassword, error } = await supabase
            .from('members')
            .select('password')
            .eq('username', username);
        }
	return dbPassword;
}



export default function Loginform2() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
            <CardDescription>
                동네 책 읽는 사람들의 모임
            </CardDescription>
        </CardHeader>
        <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="username">ID</Label>
                <Input
                    id="username"
                    type="text"
                    placeholder="ID를 입력하세요"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
            <div className="relative">
                <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent bg-blue-400"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                    ) : (
                    <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                    {showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                </span>
                </Button>
            </div>
            </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </form>
            <div className="mt-4 text-center text-sm">
                계정이 없으신가요?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                    회원가입
                </Link>
            </div>
        </CardContent>
    </Card>
    )
}
