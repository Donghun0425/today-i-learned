import Link from "next/link";
import { ArrowRight, BookOpen, GitBranch, Rocket, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";

const workflows = [
  { step: 1, title: "기획 & 디자인", icon: "🎨", desc: "프로젝트 기획 및 UI/UX 디자인" },
  { step: 2, title: "환경 설정", icon: "⚙️", desc: "개발 환경 구축 및 도구 설치" },
  { step: 3, title: "프론트엔드", icon: "🖥️", desc: "React, Next.js UI 개발" },
  { step: 4, title: "백엔드", icon: "🔧", desc: "API 서버 및 데이터베이스" },
  { step: 5, title: "형상 관리", icon: "📝", desc: "Git 버전 관리" },
  { step: 6, title: "테스트", icon: "🧪", desc: "자동화 테스트 작성" },
  { step: 7, title: "빌드", icon: "📦", desc: "프로덕션 최적화" },
  { step: 8, title: "배포", icon: "🚀", desc: "Vercel/AWS 배포" },
  { step: 9, title: "CI/CD", icon: "🔄", desc: "자동 배포 파이프라인" },
  { step: 10, title: "모니터링", icon: "📊", desc: "에러 추적 및 성능 관리" },
];

const features = [
  {
    icon: BookOpen,
    title: "단계별 학습 콘텐츠",
    description: "워크플로우 10단계별 기술 스택을 쉬운 설명과 코드 예제로 학습하세요.",
  },
  {
    icon: CheckCircle,
    title: "학습 진도 추적",
    description: "완료한 기술 스택을 체크하고, 나의 학습 대시보드에서 진도율을 확인하세요.",
  },
  {
    icon: GitBranch,
    title: "TIL 학습 노트",
    description: "오늘 배운 내용을 마크다운으로 기록하고, 기술 스택과 연결하여 관리하세요.",
  },
  {
    icon: Rocket,
    title: "실전 예제 중심",
    description: "이론이 아닌 실제 프로젝트에서 사용하는 코드 예제와 참고 자료를 제공합니다.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <Container className="flex flex-col items-center gap-6 text-center">
          <Badge variant="secondary" className="text-sm">
            🚀 주니어 개발자를 위한 학습 플랫폼
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            웹 개발 워크플로우를
            <br />
            <span className="text-primary">체계적으로 학습하세요</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            기획부터 배포까지 10단계 워크플로우와 각 단계별 기술 스택을 학습하고,
            TIL 노트로 지식을 쌓아가세요.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/workflow"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              학습 시작하기
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
            >
              로그인
            </Link>
          </div>
        </Container>
      </section>

      {/* 워크플로우 미리보기 */}
      <section className="bg-muted/40 py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">10단계 개발 워크플로우</h2>
            <p className="text-muted-foreground mt-3 text-lg">
              전체 웹 개발 과정을 단계별로 학습하고, 각 단계의 기술 스택을 익히세요.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {workflows.map((w) => (
              <Link
                key={w.step}
                href="/workflow"
                className="rounded-lg border bg-card p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {w.step}
                  </span>
                  <span className="text-lg">{w.icon}</span>
                </div>
                <h3 className="font-semibold text-sm">{w.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{w.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 주요 기능 */}
      <section className="py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">주요 기능</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border bg-card p-6">
                <div className="bg-primary/10 text-primary mb-4 flex size-10 items-center justify-center rounded-lg">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="bg-primary text-primary-foreground rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold">지금 바로 시작하세요</h2>
            <p className="mt-3 text-lg opacity-90">
              무료로 시작하고, 나만의 학습 로드맵을 만들어 보세요.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/workflow"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90 transition-colors"
              >
                <Rocket className="size-4" />
                워크플로우 보기
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                회원가입
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
