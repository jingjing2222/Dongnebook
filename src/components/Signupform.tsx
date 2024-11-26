import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    nickname: "",
    email: "",
    age: "",
    role: "member"
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    console.log(formData);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // TODO: Implement actual signup logic here
      console.log("Signup attempted with:", formData)
      toast({
        title: "회원가입 성공",
        description: "환영합니다!",
      })
    } catch (error) {
      console.error("Signup error:", error)
      toast({
        title: "회원가입 실패",
        description: "다시 시도해주세요.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
        <CardDescription>
          회원가입 후 관리자에게 문의해주세요!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Label htmlFor="username">ID</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="ID를 입력하세요"
              value={formData.username}
              onChange={handleChange}
              required
              aria-required="true"
            />
            <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-6 w-auto bg-blue-400 h-10 hover:bg-transparent"
            >
              중복 검사
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력하세요"
                value={formData.password}
                onChange={handleChange}
                required
                aria-required="true"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent bg-blue-400"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력하세요"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력하세요"
              value={formData.nickname}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">나이</Label>
            <Input
              id="age"
              name="age"
              type="number"
              placeholder="나이를 입력하세요"
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="120"
            />
          </div>
          <Button type="submit" className="w-full">
            회원가입
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

