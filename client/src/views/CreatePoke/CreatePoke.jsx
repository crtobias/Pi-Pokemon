

import { useSelector } from "react-redux";
import validationPoke from "../../componets/Form/validationPoke";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import './CreatePoke.css'

const initialPoke = {
  name: "",
  img:"",
  health: "",
  speed: "",
  defense: "",
  attack: "",
  height: "",
  weight: "",
  types: []
}


function CreatePoke() {                            
  const types = useSelector(state => state.types);     
  const [input, setInput] = useState(initialPoke);
  const [disabler, setDisabler] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (disabler) {
      setDisabler(false);
    }
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validationPoke({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const handleChangeTypes = (e) => {                            
    const type = JSON.parse(e.target.value);
    if (input.types.includes(type)) {
      setInput({
        ...input,
        types: [...input.types.filter((t) => t !== type)]
      });
      setErrors(
        validationPoke({
          ...input,
          types: [...input.types.filter((t) => t !== type)]           //setea los tipos
        })
      );
    } else {
      setInput({
        ...input,
        types: [...input.types, type]
      });
      setErrors(
        validationPoke({
          ...input,
          types: [...input.types, type]
        })
      );
    }
  }                                                                

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.entries(errors).length) {
      const response = await axios.post("http://localhost:3001/pokemons", input);   
      if (response.data.message === 'Pokemon successfully created') {
        navigate(`/details/${response.data.new_pokemon.id}`);
      }
    }
  }

  useEffect(() => {
    console.log(input);
  }, [input])

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-create">
        
        <div>
          <label> Name</label>
          <input onChange={handleChange} value={input.name} name="name" className="input-create" />
          {errors.name ? <label>{errors.name}</label> : <label>&nbsp;</label>}
        </div>
        <div>
  <label>Image URL</label>
  <input
    onChange={handleChange}
    value={input.img}
    name="img"
    className="input-create"
  />
  {errors.img ? <label>{errors.img}</label> : <label>&nbsp;</label>}
</div>

        <div>
          <label> vida</label>
          <input onChange={handleChange} value={input.health} type="number" name="health" className="input-create" />
          {errors.health ? <label>{errors.health}</label> : <label>&nbsp;</label>}
        </div>
        <div>
          <label> velocidad</label>
          <input onChange={handleChange} value={input.speed} type="number" name="speed" className="input-create" />
          {errors.speed ? <label>{errors.speed}</label> : <label>&nbsp;</label>}
        </div>
        <div>
          <label> ataque</label>
          <input onChange={handleChange} value={input.attack} type="number" name="attack" className="input-create" />
          {errors.attack ? <label>{errors.attack}</label> : <label>&nbsp;</label>}
        </div>
        <div>
          <label> Defensa</label>
          <input onChange={handleChange} value={input.defense} type="number" name="defense" className="input-create" />
          {errors.defense ? <label>{errors.defense}</label> : <label>&nbsp;</label>}
        </div>
        <div>
          <label> altura</label>
          <input onChange={handleChange} value={input.height} type="number" name="height" className="input-create" />
          {errors.height ? <label>{errors.height}</label> : <label>&nbsp;</label>}
        </div>
        <div>
          <label> Peso</label>
          <input onChange={handleChange} value={input.weight} type="number" name="weight" className="input-create" />
          {errors.weight ? <label>{errors.weight}</label> : <label>&nbsp;</label>}
        </div>
        <div className="types-checkbox">
          <label> Tipo:</label>
          {errors.types ? <label>{errors.types}</label> : <label>&nbsp;</label>}
          <div className="check">
            {types?.map(t => {
              return (
                <div key={t.id}>
                  <label>{t.name}:</label>
                  <input onChange={handleChangeTypes} value={`${t.id}`} type="checkbox" />
                </div>
              )
            })}
          </div>
        </div>
        <div className="buttons-create">
           <input disabled={disabler || Object.entries(errors).length ? true : false} value="Crear" type="submit" />    
          <Link to={`/home`}>
            <button>Home</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CreatePoke;
