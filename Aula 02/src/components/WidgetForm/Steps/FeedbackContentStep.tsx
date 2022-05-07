import { ArrowLeft } from "phosphor-react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProp{
    feedbackType: FeedbackType
    onFeedbackRestartRequested:  ()=>void
}

export const FeedbackContentStep = (prop:FeedbackContentStepProp)=>{
    const feedbackTypeInfo = feedbackTypes[prop.feedbackType]
    return(
        <>
            <header >
                <button type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={prop.onFeedbackRestartRequested}
                >
                    <ArrowLeft  weight="bold" className="w-4 h-4"/>
                </button>
                <span className="text-xl leading-6 flex flex-row items-center gap-2">
                    <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton/>
            </header>
            <form action="" className="wy-4 w-full ">
                <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-zinc-200
                        text-zinc-600 bg-transparent border-zinc-600 rounded-md
                        focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none
                        focus:outline-none scrollbar scrollbar-thin
                        scrollbar-track-transparent scrollbar-thumb-zinc-700"
                    placeholder="Conte com detalhe o que está acontecendo..."
                />
            </form>
        </>
    )
}