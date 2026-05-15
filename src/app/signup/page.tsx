import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export const metadata = {
  title: "회원가입 | Today I Learned",
  description: "새 계정을 만드세요",
};

export default function SignupPage() {
  return (
    <Container className="max-w-md">
      <PageHeader
        title="회원가입"
        description="Today I Learned와 함께 학습을 시작하세요"
      />

      <div className="mt-8 rounded-lg border bg-card p-6">
        <form className="space-y-4">
          <div>
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              id="nickname"
              type="text"
              placeholder="2~20자 이내"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="8자 이상"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
            <Input
              id="passwordConfirm"
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              className="mt-2"
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            회원가입
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">이미 계정이 있으신가요? </span>
          <Link href="/login" className="text-primary hover:underline font-medium">
            로그인
          </Link>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Supabase 인증 연동 예정
      </p>
    </Container>
  );
}
