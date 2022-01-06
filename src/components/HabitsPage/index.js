import TopBar from "../TopBar";

export default function HabitsPage({ user }) {
    return (
        <>
            <TopBar user={user} />
            {console.log(user)}
        </>
    );
}