import axios from "axios";

const BusinessRequest = {

  register: (formData) => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/business/create',
      data: formData,
      headers: {
        'Content-Type': `multipart/form-data;`,
      },
    })
  }

};

export default BusinessRequest;