import  React ,{ useState , useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from 'axios'


const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
};

const Update = () => {
    const [restaurant , setRestaurant ] = useState ({
      name:"",
      type:"",
      img:""
    })
    const navigate = useNavigate();
    const [error , setError ] = useState();
    const {restaurantId} = useParams();

    const handleChange = (e) => {
        setRestaurant((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        const fetchAllRestaurants = async () => {
            try {
                const res = await axios.get(`${URL}/restaurants/${restaurantId}`, config);
                setRestaurant(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllRestaurants();
    }, [restaurantId]);

    const handleClick = async (e) => {
        e.preventDefault();
        try{
          await axios.put(`${URL}/restaurants/${restaurantId}`,restaurant, config)
          navigate("/")
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };
    
    

      return (
        <div className='container'>
          <h1>Grab Reataurant</h1>
          <div className='row form'>
            <div className='col-10 justify-content-center'>
              <h5 className='card-header'>Add New Restaurant</h5>
              <div className='error'>{error && "someting went erong !!!"}</div>
              <div className='card-body'>
                <form>
                  <div className='form-grop'>
                    <label htmlFor="name">Restaurant Name</label>
                    <input 
                      type="text"
                      className='form-control'
                      name="name"
                      placeholder='Restaurant name'
                      onChange={handleChange}
                      value={restaurant.name}
                    />
                  </div>
    
                  <div className='form-grop'>
                    <label htmlFor="type">Restaurant Type</label>
                    <input 
                      type="text"
                      className='form-control'
                      name="type"
                      placeholder='Restaurant type'
                      onChange={handleChange}
                      value={restaurant.type}
                    />
                  </div>
    
                  <div className='form-grop'>
                    <label htmlFor="img">Restaurant Image</label>
                    <input 
                      type="text"
                      className='form-control'
                      name="img"
                      placeholder='Restaurant img'
                      onChange={handleChange}
                      value={restaurant.img}
                    />
                  </div>
    
                  <Link to="" className="btn btn-success px-2" onClick={handleClick}>Update</Link>
                  {" "}
                  <Link to="" className="btn btn-danger px-2" >Cencal</Link>
    
    
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    export default Update