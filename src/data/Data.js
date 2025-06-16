import solution01 from "../image/solution01.svg";
import solution02 from "../image/solution02.svg";
import solution03 from "../image/solution03.svg";
import solution04 from "../image/solution04.svg";



const notice = [
    {
        id: 1,
        title: "다인패스 공지사항 입니다.다인패스 공지사항 입니다.",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        date: "2025.05.19"
    },
    {
        id: 2,
        title: "다인패스 오픈일 변경 안내",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        date: "2025.05.10"
    },
    {
        id: 3,
        title: "다인패스2 공지사항 입니다.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "2025.05.01"
    },
    {
        id: 4,
        title: "다인패스 공지사항3 입니다.",
        content: "다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.",
        date: "2025.04.20"
    },
    {
        id: 5,
        title: "다인패스 공지사항 입니다.다인패스 공지사항 입니다.",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        date: "2025.05.19"
    },
    {
        id: 6,
        title: "다인패스 오픈일 변경 안내",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        date: "2025.05.10"
    },
    {
        id: 7,
        title: "다인패스2 공지사항 입니다.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "2025.05.01"
    },
    {
        id: 8,
        title: "다인패스 공지사항3 입니다.",
        content: "다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.",
        date: "2025.04.20"
    },
    {
        id: 9,
        title: "다인패스 공지사항 입니다.다인패스 공지사항 입니다.",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        date: "2025.05.19"
    },
    {
        id: 10,
        title: "다인패스 오픈일 변경 안내",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        date: "2025.05.10"
    },
    {
        id: 11,
        title: "다인패스2 공지사항 입니다.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "2025.05.01"
    },
    {
        id: 12,
        title: "다인패스 공지사항3 입니다.",
        content: "다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.다인패스 공지사항3 입니다.",
        date: "2025.04.20"
    },
];

const solutionText = [
    {
        id: 1,
        title: "국내 여행을 계획 중인 여행자",
        img: solution01,
        content: "숙소, 교통, 체험까지 한 번에 예약하고 싶은 분!\nAI가 일정을 제안하고 할인도 자동 적용해줘요",
    },
    {
        id: 2,
        title: "할인을 꼼꼼히 챙기는 알뜰 소비자",
        img: solution02,
        content: "여러 할인 찾아 헤맬 필요 없어요\n가장 저렴한 조건으로 똑똑하게 예약하세요",
    },
    {
        id: 3,
        title: "출장이 많은 직장인",
        img: solution03,
        content: "복잡한 출장 스케줄, 더 이상 직접 안짜도 되요\n위치와 시간에 맞춰 AI가 최적 경로를 설계해줘요",
    },
    {
        id: 4,
        title: "IT가 익숙하지 않은 부모님",
        img: solution04,
        content: "복잡한 앱, 터치 많은 화면은 이제 그만!\n말로 예약하면 부모님도 손쉽게 쓸 수 있어요",
    },

];

const mainAnimations = [
    {
        selector: ".section01 img",
        animation: { clipPath: "inset(50%)", opacity: 0, duration: 1, ease: "power1.inOut", },
    },
    {
        selector: ".section02 > div > div",
        animation: { y: 100, opacity: 0, duration: 0.3, ease: "power1.inOut", stagger: 0.3, },
    },
    {
        selector: ".section04 .sectionBg",
        animation: { clipPath: "inset(50%)", opacity: 0, duration: 0.6, ease: "power1.inOut", delay: 0.3 },
    },
    {
        selector: ".section04 .smartText",
        animation: { y: 100, opacity: 0, duration: 0.3, ease: "power1.inOut", delay: 1, },
    },
    {
        selector: ".section05 > h2",
        animation: { y: 100, opacity: 0, duration: 0.3, ease: "power1.inOut", delay: 0.3, },
    },
    {
        selector: ".section05 > .address",
        animation: { y: 100, opacity: 0, duration: 0.3, ease: "power1.inOut", delay: 0.6, },
    },
];


export { notice, solutionText, mainAnimations };