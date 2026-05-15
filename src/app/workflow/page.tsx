import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";

export const metadata = {
  title: "워크플로우 로드맵 | Today I Learned",
  description: "웹 개발 워크플로우를 단계별로 학습하세요",
};

export default function WorkflowPage() {
  const workflows = [
    { id: 1, title: "기획 & 디자인", order: 1, icon: "🎨", description: "프로젝트 기획 및 UI/UX 디자인" },
    { id: 2, title: "환경 설정", order: 2, icon: "⚙️", description: "개발 환경 구축 및 도구 설치" },
    { id: 3, title: "프론트엔드 개발", order: 3, icon: "🖥️", description: "React, Next.js를 활용한 UI 개발" },
    { id: 4, title: "백엔드 개발", order: 4, icon: "🔧", description: "API 서버 및 데이터베이스 구축" },
    { id: 5, title: "형상 관리", order: 5, icon: "📝", description: "Git을 활용한 버전 관리" },
    { id: 6, title: "테스트", order: 6, icon: "🧪", description: "단위/통합/E2E 테스트 작성" },
    { id: 7, title: "빌드", order: 7, icon: "📦", description: "프로덕션 빌드 및 최적화" },
    { id: 8, title: "배포", order: 8, icon: "🚀", description: "Vercel, AWS 등으로 배포" },
    { id: 9, title: "CI/CD", order: 9, icon: "🔄", description: "자동화된 배포 파이프라인" },
    { id: 10, title: "모니터링", order: 10, icon: "📊", description: "에러 추적 및 성능 모니터링" },
  ];

  return (
    <Container>
      <PageHeader
        title="워크플로우 로드맵"
        description="웹 개발의 전체 과정을 단계별로 학습하고, 각 단계에 필요한 기술 스택을 익히세요."
      />

      <div className="mt-8 space-y-4">
        {workflows.map((workflow) => (
          <div
            key={workflow.id}
            className="rounded-lg border bg-card p-6 hover:bg-accent/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{workflow.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {workflow.order}
                  </span>
                  <h3 className="text-xl font-semibold">{workflow.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{workflow.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-dashed p-6 text-center text-muted-foreground">
        <p>각 단계를 클릭하면 관련 기술 스택 목록을 확인할 수 있습니다 (개발 예정)</p>
      </div>
    </Container>
  );
}
