import React from "react";
import {
    useNavigate
} from 'react-router-dom'
function Home() {
    const navigate = useNavigate();
    const openPage = (page: string)=>{
        navigate(page);
    }
	return (
		<div className="contanier">
			<div className="row mt-5 ">
				<div className="col-3"></div>
				<div className="col-6 border p-3 ">
					<div className="mb-3 d-grid">
						<input
                            onClick={()=>openPage('/login')}
							type="button"
							value="Login Page"
							className="btn btn-outline-success"
						/>
					</div>
					<div className="mb-3 d-grid">
						<input
                        onClick={()=>openPage('/product')}
							type="button"
							value="Porduct Page"
							className="btn btn-outline-success"
						/>
					</div>
					<div className="mb-3 d-grid">
						<input
                        onClick={()=>openPage('/avatar')}
							type="button"
							value="Avatar Page"
							className="btn btn-outline-success"
						/>
					</div>
					<div className="mb-3 d-grid">
						<input
                        onClick={()=>openPage('/user')}
							type="button"
							value="User Page"
							className="btn btn-outline-success"
						/>
					</div>
					<div className="mb-3 d-grid">
						<input
                        onClick={()=>openPage('/yarisma')}
							type="button"
							value="Yarışma Page"
							className="btn btn-outline-success"
						/>
					</div>
					<div className="mb-3 d-grid">
						<input
                        onClick={()=>openPage('/user-list')}
							type="button"
							value="User List Page"
							className="btn btn-outline-success"
						/>
					</div>
				</div>
				<div className="col-3"></div>
			</div>
		</div>
	);
}

export default Home;