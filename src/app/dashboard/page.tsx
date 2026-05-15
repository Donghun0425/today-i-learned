import type { Metadata } from "next";
import { CheckCircle2, FileText, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "나의 학습",
};

// TODO: Supabase에서 사용자 학습 데이터 가져오기
const progressByWorkflow = [
  { id: 1, title: "기획 & 디자인", icon: "🎨", total: 4, completed: 0 },
  { id: 2, title: "환경 설정", icon: "⚙️", total: 5, completed: 0 },
  { id: 3, title: "프론트엔드 개발", icon: "🖥️", total: 8, completed: 0 },
  { id: 4, title: "백엔드 개발", icon: "🔧", total: 7, completed: 0 },
  { id: 5, title: "형상 관리", icon: "📝", total: 5, completed: 0 },
  { id: 6, title: "테스트", icon: "🧪", total: 4, completed: 0 },
  { id: 7, title: "빌드", icon: "📦", total: 3, completed: 0 },
  { id: 8, title: "배포", icon: "🚀", total: 5, completed: 0 },
  { id: 9, title: "CI/CD", icon: "🔄", total: 4, completed: 0 },
  { id: 10, title: "모니터링", icon: "📊", total: 5, completed: 0 },
];

const recentTILs = [
  { id: 1, title: "React useState Hook 학습", techStack: "React", date: "2026-05-15" },
  { id: 2, title: "Next.js App Router 이해하기", techStack: "Next.js", date: "2026-05-14" },
];

const totalTechStacks = progressByWorkflow.reduce((sum, w) => sum + w.total, 0);
const completedTechStacks = progressByWorkflow.reduce((sum, w) => sum + w.completed, 0);
const progressPercentage = Math.round((completedTechStacks / totalTechStacks) * 100);

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="나의 학습"
        description="전체 학습 진도와 최근 활동을 확인하세요"
      />

      {/* 전체 통계 */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">전체 진도율</CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{progressPercentage}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {completedTechStacks} / {totalTechStacks} 기술 스택 완료
            </p>
            <div className="mt-3 h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">완료한 기술 스택</CardTitle>
            <CheckCircle2 className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{completedTechStacks}</div>
            <p className="text-xs text-muted-foreground mt-1">전체 {totalTechStacks}개 중</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">작성한 TIL</CardTitle>
            <FileText className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{recentTILs.length}</div>
            <p className="text-xs text-muted-foreground mt-1">학습 노트</p>
          </CardContent>
        </Card>
      </div>

      {/* 워크플로우별 진도 */}
      <Card>
        <CardHeader>
          <CardTitle>워크플로우별 진도</CardTitle>
          <CardDescription>각 단계별 학습 완료율을 확인하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {progressByWorkflow.map((workflow) => {
              const pct = workflow.total > 0
                ? Math.round((workflow.completed / workflow.total) * 100)
                : 0;
              return (
                <Link key={workflow.id} href="/workflow" className="block group">
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="flex items-center gap-2 font-medium group-hover:text-primary transition-colors">
                      <span>{workflow.icon}</span>
                      {workflow.title}
                    </span>
                    <span className="text-muted-foreground">
                      {workflow.completed}/{workflow.total}
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 최근 TIL */}
      <Card>
        <CardHeader>
          <CardTitle>최근 작성한 TIL</CardTitle>
          <CardDescription>최근 학습 노트 목록입니다</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {recentTILs.map((til) => (
              <div key={til.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-sm">{til.title}</p>
                  <span className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-medium">
                    {til.techStack}
                  </span>
                </div>
                <span className="text-muted-foreground text-xs shrink-0">{til.date}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/til" className="text-sm text-primary hover:underline">
              전체 TIL 보기 →
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="rounded-lg border border-dashed p-6 text-center text-muted-foreground">
        <p>💡 학습 데이터는 로그인 후 실제 데이터로 표시됩니다 (Supabase 연동 예정)</p>
      </div>
    </>
  );
}
