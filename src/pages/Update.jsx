import  React ,{ useState , useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import api from '../services/api'

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

    //จะทำงานเมื่อ restaurantId ถูกเปลี่ยน
    useEffect(() => {
        const fetchAllRestaurants = async () => {
            try {
                const res = await api.get(`/restaurants/${restaurantId}`);
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
          await api.put(`/restaurants/${restaurantId}`,restaurant, )
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
        <div className='card-add'>
        <div className='col-12 justify-content-center'>
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
        </div>
      )
    }
    
    export default Update