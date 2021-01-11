import axios from "axios";

export default {
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/?results=50&inc=name,phone,nat,email,picture,dob&nat=au,nz");
  }
};