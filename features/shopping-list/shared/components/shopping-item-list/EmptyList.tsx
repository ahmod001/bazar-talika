import EmptyScreen from "@/components/EmptyScreen"

const EmptyList = () => {
    return (
        <EmptyScreen>
            <EmptyScreen.Icon />
            <EmptyScreen.Message>
                নতুন পন্য যুক্ত করতে নিচের (+) বাটনে প্রেস করুন।
            </EmptyScreen.Message>
        </EmptyScreen>
    )
}

export default EmptyList