interface ActionBtnProps {
    text: string
    action: () => void
}

const ActionBtn = ({ text, action }: ActionBtnProps) => {
    return (
        <button 
            onClick={action} 
            className="action-btn" 
            type="button">
                {text}
        </button>
    )
}

export default ActionBtn