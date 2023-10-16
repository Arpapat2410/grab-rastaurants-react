import { useAuthContext } from "../context/AuthContext";

const Profile = () => {
    const { user } = useAuthContext();

    return (

        <section class="vh-100" style={{ backgroundColor: "white" }}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-80">
                    <div class="col-md-12 col-xl-4">

                        <div class="card" style={{ borderRadius: "15px", backgroundColor: "#f4f4f4" }}>
                            <div class="card-body text-center">
                                <div class="mt-2 mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                        class="rounded-circle img-fluid" style={{ width: "100px" }} />
                                </div>
                                <h2 class="mb-2">{user.username}</h2>

                                <p class="text-muted mb-3">Id :  {user.id}</p>
                                <p class="text-muted mb-3">Email : {user.email}</p>
                                <p class="text-muted mb-3">Roles : {user.roles.length}</p>
                                <p>
                                    {user.roles &&
                                        user.roles.map((role, index) =>
                                            <p key={index}>{role}</p>)}
                                </p>
                                <div class="text-muted mb-3">Token :
                                    {user.accessToken.substring(0, 20)}...
                                    {user.accessToken.substring(user.accessToken.length - 20)}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;