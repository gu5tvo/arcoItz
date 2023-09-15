import Spinner from "../components/Spinner";

/* eslint-disable react/react-in-jsx-scope */
export default function LoadingPage() {
    return (
        <div style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'min(60px, 10vw)', flexDirection: 'column'}}>
            <Spinner/>
        </div>
    )
}