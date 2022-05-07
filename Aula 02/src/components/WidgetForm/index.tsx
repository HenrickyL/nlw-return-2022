import { useState } from "react"
import { CloseButton } from "../CloseButton"
import bugImgUrl from '../../assets/bug.svg'
import ideaImgUrl from '../../assets/idea.svg'
import thoughtImgUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image:{
            source:bugImgUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA:{
        title: 'Ideia',
        image:{
            source:ideaImgUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER:{
        title: 'Outro',
        image:{
            source:thoughtImgUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = ()=>{
    const [fbType,setFbType] = useState<FeedbackType|null>(null)
    const handleResetFeedback=()=>{
        setFbType(null)
    }
    return (
        <div
            className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col 
                        items-center gap-2 shadow-lg w-[calc(100vw-2rem)] md:w-auto my-2 "    
        >
            
            {
                !fbType?
                    <FeedbackTypeStep onFeedbackTypeChanged={setFbType}/>:
                    <FeedbackContentStep 
                        feedbackType={fbType}
                        onFeedbackRestartRequested={handleResetFeedback}
                        />

            }
            <footer className="text-xs text-neutral-400 ">
                Feito com  ❤ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}