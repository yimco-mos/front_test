import { useState, useEffect } from "react";

export const useTextInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return { value, onChange: handleChange, reset };
};

export const usePostProducto = (url) => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    tipo: "",
  });
  const [responseData, setResponseData] = useState(null);
  const [showResponse, setShowResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postData = async () => {
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }

      const data = await response.json();
      setResponseData(data);
      setShowResponse(true);
      setTimeout(() => setShowResponse(false), 5000);

      // Restablecer los datos del formulario después de enviarlos con éxito
      setFormData({
        nombre: "",
        precio: "",
        tipo: "",
      });
    } catch (error) {
      setError(error);
    }
  };

  const resetResponse = () => {
    setResponseData(null);
  };

  return {
    postData,
    error,
    handleChange,
    formData,
    responseData,
    showResponse,
    resetResponse,
  };
};

export const useFetchGet = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export const usePostTienda = (url) => {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
  });
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [showResponse, setShowResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postData = async () => {
    setError(null);
    setResponseData(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }

      const data = await response.json();
      setResponseData(data);
      setShowResponse(true);
      setTimeout(() => setShowResponse(false), 5000);
    } catch (error) {
      setError(error);
    }
  };

  return {
    formData,
    error,
    responseData,
    showResponse,
    handleChange,
    postData,
  };
};


export const useLogin = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false); 

  const login = async (email, pass) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pass }),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const data = await response.json();
      const status = data.login;
      if (status === 1) {
        setLoginStatus(true);
      } else {
        setLoginStatus(false);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, login, loginStatus }; 
};
