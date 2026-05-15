import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export const metadata = {
  title: "로그인 | Today I Learned",
  description: "계정에 로그인하세요",
};

export default function LoginPage() {
  return (
    <Container className="max-w-md">
      <PageHeader
        title="로그인"
        description="Today I Learned에 오신 것을 환영합니다"
      />

      <div className="mt-8 rounded-lg border bg-card p-6">
        <form className="space-y-4">
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
              placeholder="••••••••"
              className="mt-2"
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            로그인
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">계정이 없으신가요? </span>
          <Link href="/signup" className="text-primary hover:underline font-medium">
            회원가입
          </Link>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Supabase 인증 연동 예정
      </p>
    </Container>
  );
}
