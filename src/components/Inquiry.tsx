import React, { useCallback, useState } from "react";

import { useModalStore } from "../stores/store";

import useInput from "../hook/useInput";
import { onlyNumber } from "../data/Init";

import inquiryIcon01 from "../image/inquiry_icon01.svg";
import inquiryIcon02 from "../image/inquiry_icon02.svg";
import inquiryIcon03 from "../image/inquiry_icon03.svg";

export default function Inquiry() {
    const toggleModal = useModalStore((state) => state.toggleModal);

    const [name, onChangeName] = useInput("");
    const [email, onChangeEmail] = useInput("");
    const [tel, onChangeTel] = useState<string>("");
    const [message, onChangeMessage] = useInput("");
    const [agree, setAgree] = useState<boolean>(false);

    const onChangeAgree = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAgree(e.target.checked);
    }, []);

    const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            // 1. 개인정보 동의 먼저 검사
            const isAgreed = formData.get("agree") !== null;
            if (!isAgreed) {
                alert("개인정보 수집 및 이용에 동의하셔야 합니다.");
                return;
            }

            // 2. 필수 입력 필드 검사
            const labelMap: Record<string, string> = {
                name: "이름",
                email: "이메일",
                tel: "전화번호",
                message: "문의 내용",
            };

            const entries = Array.from(formData.entries());

            for (let [key, value] of entries) {
                // 체크박스 제외
                if (key === "agree") continue;

                if (!value || value.toString().trim() === "") {
                    const label = labelMap[key] ?? key;
                    alert(`${label}을(를) 입력해주세요.`);
                    return;
                }
            }

            // 3. 모든 필드가 유효한 경우
            alert("문의글이 성공적으로 등록되었습니다.");
            toggleModal();

            // 실제 전송 로직
            // emailjs.sendForm("service_...", "template_...", form, "user_...")
            //   .then(result => {
            //     console.log(result.text);
            //     alert("감사합니다!");
            //   })
            //   .catch(error => {
            //     console.error(error.text);
            //     alert("전송 실패 😥");
            //   });
        },
        [toggleModal]
    );

    return (
        <div className="flex inquiry inner">
            <div className="inquiryDesc">
                <div className="subTitle">
                    <h2>
                        <div>작은 궁금함도 괜찮습니다.</div>
                        <div>함께 답을 찾겠습니다.</div>
                    </h2>
                </div>
                <div className="inquiryInfo">
                    <ul>
                        <li>
                            <img src={inquiryIcon01} alt="mail" />
                            <span>
                                <a href="mailto:woosoung3254@naver.com">woosoung3254@naver.com</a>
                            </span>
                        </li>
                        <li>
                            <img src={inquiryIcon02} alt="tel" />
                            <span>
                                <a href="tel:1577-8397">1577-8397</a>
                            </span>
                        </li>
                        <li>
                            <img src={inquiryIcon03} alt="time" />
                            <span>평일 09:30 - 18:00</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="inquiryBox">
                <div className="InquiryWrap">
                    <form action="" onSubmit={onSubmit}>
                        <ul>
                            <li>
                                <input type="text" placeholder="이름" name="name" id="name" value={name} onChange={onChangeName} />
                            </li>
                            <li>
                                <input type="text" placeholder="이메일" name="email" id="email" value={email} onChange={onChangeEmail} />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    placeholder="연락처 (ex: 01012345678)"
                                    name="tel"
                                    id="tel"
                                    autoComplete="off"
                                    value={tel}
                                    onInput={(e) => onChangeTel(onlyNumber(e.currentTarget.value))}
                                />
                            </li>
                            <li>
                                <textarea name="message" id="message" placeholder="문의 내용을 작성해 주세요" value={message} onChange={onChangeMessage}></textarea>
                            </li>
                            <li>
                                <div className="agreeBox">
                                    <div>
                                        <input type="checkbox" name="agree" id="agree" checked={agree} onChange={onChangeAgree} />
                                        <label htmlFor="agree">
                                            <span></span>개인정보 수집 및 이용 동의
                                        </label>
                                    </div>
                                    <a href="/privacy" target="_blank" className="underlineEffect">
                                        자세히
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <button type="submit" className="InquiryBtn btnEffect btnEffectColor">
                            문의 내용 보내기
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
