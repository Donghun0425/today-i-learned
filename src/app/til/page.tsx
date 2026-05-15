import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "나의 TIL | Today I Learned",
  description: "오늘 배운 내용을 기록하세요",
};

export default function TILPage() {
  const tils = [
    {
      id: 1,
      title: "React useState Hook 학습",
      content: "useState를 사용하면 함수형 컴포넌트에서도 상태를 관리할 수 있다는 것을 배웠다...",
      techStack: "React",
      createdAt: "2026-05-15",
    },
    {
      id: 2,
      title: "Next.js App Router 이해하기",
      content: "App Router는 파일 시스템 기반 라우팅을 제공한다. app/ 폴더 안에...",
      techStack: "Next.js",
      createdAt: "2026-05-14",
    },
  ];

  return (
    <Container>
      <PageHeader
        title="나의 TIL"
        description="오늘 배운 내용을 기록하고, 학습 노트를 관리하세요."
      />

      <div className="mt-8 rounded-lg border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">새 TIL 작성</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">제목</label>
            <Input placeholder="오늘 배운 내용을 한 줄로 요약하세요" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">관련 기술 스택 (선택)</label>
            <Input placeholder="예: React, Next.js, TypeScript" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">내용 (마크다운 지원)</label>
            <Textarea placeholder="오늘 배운 내용을 자유롭게 작성하세요." rows={10} />
          </div>
          <div className="flex gap-2">
            <Button>저장</Button>
            <Button variant="outline">취소</Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">최근 작성한 TIL</h3>
        <div className="space-y-4">
          {tils.map((til) => (
            <div key={til.id} className="rounded-lg border bg-card p-6 hover:bg-accent/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {til.techStack && (
                      <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium">
                        {til.techStack}
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">{til.createdAt}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{til.title}</h4>
                  <p className="text-muted-foreground line-clamp-2">{til.content}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline">수정</Button>
                  <Button size="sm" variant="outline">삭제</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-dashed p-6 text-center text-muted-foreground">
        <p>TIL 작성 및 관리는 로그인 후 사용 가능합니다 (개발 예정)</p>
      </div>
    </Container>
  );
}
