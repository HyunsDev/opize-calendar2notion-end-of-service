import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import OpizeLogo from "./assets/images/opize.png";
import HyunsLogo from "./assets/images/hyuns.png";

// function OpizeBadge() {
//   return (
//     <a href="https://opize.me" target="_blank" className="flex w-fit">
//       <div className="bg-gradient-to-l from-[#9764ff] to-[#649dff] rounded-full pr-5 h-7 flex items-center gap-2">
//         <img src={OpizeLogo} className="h-full" alt="" />
//         <span className="text-white text-sm">Opize Project #1</span>
//       </div>
//     </a>
//   );
// }

function EndOfServiceBadge() {
  return (
    <div className="bg-gradient-to-l from-[#9764ff] to-[#649dff] text-background px-2 py-1 rounded">
      Opize Calendar2notion
    </div>
  );
}

function Title() {
  return (
    <div className="text-center mt-3">
      <h1 className="font-black text-6xl">서비스 종료 안내</h1>
    </div>
  );
}

function Description() {
  return (
    <div className="mt-3 text-center text-muted-foreground">
      <p>Opize Calendar2notion은</p>
      <p>2024년 3월 6일 서비스를 종료했습니다.</p>
      <p>그 동안 이용해주셔서 진심으로 감사합니다.</p>
    </div>
  );
}

function Comments() {
  return (
    <div className="mt-12 ">
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          speed="slow"
          items={[
            {
              quote: "그동안 감사했습니다💕",
              name: "김**",
            },
            {
              quote: `훌륭한 서비스를 이용할 수 있어서 감사했습니다. 개발자님의 발전하는 모습을 업계 종사자의 입장에서 항상 응원해요. 앞서온 입장에서는 열정이 존경스럽고 든든했습니다.
              일면식도 없긴하지만 진정으로 응원을 보내는 팬이 있다는거 잊지마시고ㅎㅎ
              군 복무 잘하고 앞으로의 행보에도 성공만이 가득하길 바랄게요!🫡`,
              name: "K**",
            },
            {
              quote: `안녕하세요. 동기화 관련으로 홈페이지 접속했다가 서비스 종료 소식을 접하게되어 문의 남깁니다.

            우선 개발해주신 서비스 덕분에 편리하게 일정 및 프로젝트를 관리할 수 있었습니다. 너무 감사합니다.
            3월부터 서비스를 종료한다는 소식에 안타까움이 남는 한편 또 다른 서비스 개발자님을 뵙게되면 좋겠다는 기대와 응원을 보냅니다.`,
              name: "응원하는 튜브",
            },
            {
              quote: `정말 고생 많으셨고, 덕분에 노션 유용하게 쓸 수 있었습니다. 감사합니다`,
              name: "이**",
            },
            {
              quote: `짧은 기간이었지만 잘 사용했습니다. 감사합니다!`,
              name: "이**",
            },
            {
              quote: `감사합니다!! 재미난 서비스였는데 아쉽네요. 새로운 아이디어 또 기대하겠습니다. 건강하게 복무마치고 돌아오세요!!`,
              name: `안**`,
            },
            {
              quote: `잘 사용했었습니다 감사합니다`,
              name: `J*`,
            },
            {
              quote: `고맙습니다 노션 캘린더 보다 역시 훨씬 좋은 기능이 었어서 오래 잘 이용했어요 행복하세요`,
              name: `백**`,
            },
            {
              quote: `좋은 서비스 개발해주셔서 진심으로 감사합니다. 건강히 군복무도 잘 마치시고, 계속해서 학업과 함께 커리어도 이어나가시길 바라요. 군에서의 시간도 잘 쓰시길 바랍니다. 건승을 빌어요.☺️`,
              name: `배**`,
            },
            {
              quote: `제가 덕분에 너무 잘사용했습니다. 앞으로도 좋은 프로그램 개발 부탁드립니다. 감사합니다.`,
              name: `김**`,
            },
            {
              quote: `(스타벅스 기프티콘) 군대 가신다구ㅜㅜ 몸 조심하시구 IT계의 거성으로 자라나시길 기원합니다 ㅎㅎ~~!! `,
              name: `배**`,
            },
            {
              quote: `안녕하세요! 좋은 서비스 제공해주셔서 잘 사용했습니다. 그동안 감사했습니다 `,
              name: `남**`,
            },
            {
              quote: `확인했습니다~ 감사합니다!! 그동안 좋은 서비스로 편하게 잘 활용했습니다~ 감사합니다!`,
              name: `인사하는 프로도`,
            },
          ]}
        />
      </div>
      <div className="text-sm text-center text-muted-foreground">
        이 외에도 많은 분들이 서비스 종료 소식에 대한 응원과 감사의 마음을
        전해주셨습니다.
        <br />
        모두 감사드립니다!
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="flex gap-2 mt-4">
      <a href="https://opize.me" target="_blank">
        <img src={OpizeLogo} alt="" className="size-8 rounded-full" />
      </a>

      <a href="https://hyuns.dev" target="_blank">
        <img src={HyunsLogo} alt="" className="size-8 rounded-full" />
      </a>

      <a
        href="https://github.com/HyunsDev?tab=repositories&q=calendar2notion"
        target="_blank"
      >
        <svg
          className="size-8"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>

      <a
        href="https://hyunsdev.notion.site/Calendar2notion-59cab2e0c8cc4597b1689e7aae83a76a"
        target="_blank"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="size-8"
        >
          <title>Notion</title>
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
        </svg>
      </a>
    </div>
  );
}

function Contact() {
  return (
    <div className="mt-4 text-muted-foreground text-center text-sm">
      <p>
        <a
          href="mailto:support@opize.me
"
        >
          support@opize.me
        </a>
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="w-[100dvw] min-h-[100dvh] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <EndOfServiceBadge />
        <Title />
        <Description />
        <Comments />
        <Icons />
        <Contact />
      </div>
    </div>
  );
}

export default App;
