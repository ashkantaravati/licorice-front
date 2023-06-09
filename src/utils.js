const api = {
  async getJSON(url,params) {
    try {
        const response = await fetch(url);
        
    
        const result = await response.json();
        console.log("Success:", result);
        return result;
      } catch (error) {
        console.error("Error:", error);
      }

  },
  async postJSON(url,payload,params) {
    try {
        const response = await fetch(url,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
        
    
        const result = await response.json();
        console.log("Success:", result);
        return result;
      } catch (error) {
        console.error("Error:", error);
      }

  },
};

export {api}
