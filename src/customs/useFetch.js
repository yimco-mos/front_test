import { useState, useEffect, useCallback } from "react";

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

  const fetchData = useCallback(async () => {
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
    console.log("ingress");
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

export const useUser = (url, method, data = {}) => {
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ciudad: "",
    pass: "",
    admis: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setFormData({
      email: "",
      pass: "",
    });

    const requestOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }
      const res = await response.json();
      
      sessionStorage.setItem('dataUser', JSON.stringify(res));
      if (res.login === 1) {
        const status = true;
    e.preventDefault();

        window.location.href = "/";
        sessionStorage.setItem("act", status);
        const handleBackButton = (event) => {
          window.history.replaceState(null, null, "/");
        };

        window.addEventListener("popstate", handleBackButton);

        return () => {
          window.removeEventListener("popstate", handleBackButton);
        };
      }
      if (res.admis === true) {
        const status = res.admis;
        sessionStorage.setItem("adm", status);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  return {
    
    formData,
    handleChange,
    handleLogin,
  };
};
