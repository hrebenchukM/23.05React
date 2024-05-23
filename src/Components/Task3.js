export function AdminPanel() {
    return (
        <div>
            <p>ADMIN</p>
        </div>
    );

}
export function LoginForm() {
    return (
        <div>
            <p>USER</p>
        </div>
    );

}
let isLoggedIn = true;

export function Ifrender() {

    let content;
    if (isLoggedIn) 
    {
        content = <AdminPanel />;
    } 
    else
    {
        content = <LoginForm />;
    }
    return (
        <div>
            {content}
        </div>

      // <div>{isLoggedIn ? (<AdminPanel />) : (<LoginForm />)} </div>
    );
}