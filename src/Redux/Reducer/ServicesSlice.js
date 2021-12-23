import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import bestTeamData from '../.././BestTeam.json';


// First, create the thunk
// all data are fetch
export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async () => {

    const response = await fetch('https://lit-savannah-85898.herokuapp.com/events').then(res => res.json())
    return response;

  }
)
export const OrderPostServices = createAsyncThunk(
  'services/OrderPostServices',
  async (body) => {

    const response = await fetch('https://lit-savannah-85898.herokuapp.com/purchase', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
    return response;

  }
)
export const OrderGetServicesByEmail = createAsyncThunk(
  'services/ OrderGetServicesByEmail',
  async (body) => {

    const response = await fetch(`https://lit-savannah-85898.herokuapp.com/eventlist?email=${body}`).then(res => res.json())

    return response;

  }
)

export const OrderDeleteServicesById = createAsyncThunk(
  'services/OrderDeleteServicesById',
  async (id) => {

    const response = await fetch(`https://lit-savannah-85898.herokuapp.com/eventlist/${id}`, {
      method: 'DELETE'

    }).then(res => res.json())
    return response;

  }
)


export const SslPayment = createAsyncThunk(
  'services/SslPayment',

  async (body) => {


    const response = await fetch('https://lit-savannah-85898.herokuapp.com/init', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())


    window.location.replace(response);

    return response;

  }
)

export const fetchAllorderServices = createAsyncThunk(
  'services/fetchAllorderServices',
  async () => {

    const response = await fetch('https://lit-savannah-85898.herokuapp.com/orderlist').then(res => res.json())
    return response;

  }
)

export const addEvent = createAsyncThunk(
  'services/addEvent',

  async (body) => {
    const response = await fetch('https://lit-savannah-85898.herokuapp.com/events', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())

    return response;

  }
)
export const UpdateEvent = createAsyncThunk(
  'services/UpdateEvent',

  async (body) => {
   const id =body.id;
   const doc=body.doc;
    const response = await fetch(`https://lit-savannah-85898.herokuapp.com/events/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(doc)
    }).then(res => res.json())

    return response;

  }
)

export const eventDelete = createAsyncThunk(
  'services/eventDelete',
  async (id) => {

    const response = await fetch(`https://lit-savannah-85898.herokuapp.com/events/${id}`, {
      method: 'DELETE'

    }).then(res => res.json())
    return response;

  }
)
// user info send database
export const manageUser = createAsyncThunk(
  'services/manageUser',

  async (body) => {
    const mthode=body.method;
    const doc={
      name:body.docName,
      email:body.docEmail,
    }
    const response = await fetch('https://lit-savannah-85898.herokuapp.com/users', {
      method: mthode,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(doc)
    }).then(res => res.json())

    return response;

  }
)
// make admin 
export const makeAdmin = createAsyncThunk(
  'services/makeAdmin',
  async (body) => {
    const response = await fetch('https://lit-savannah-85898.herokuapp.com/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())

    return response;

  }
  
  
)
// get admin
export const GetAdmin = createAsyncThunk(
  'services/GetAdmin',
  async (body) => {

    const response = await fetch(`https://lit-savannah-85898.herokuapp.com/users/${body.user}`)
    .then(res => res.json())

   
    return response;

  }
)

const ServicesSlice = createSlice({
  name: 'service',
  initialState: {
    discover: [],

    status: 'idle',
    orderStored: [],
    orderGetStore: [],
    orderDeletedStore: [],
    paymentStore: [],
    AllorderServices: [],
    addEventstore:[],
    eventDeleteStore:[],
    eventUpdateStore:[],
    manageUserStore:[],
    makeAdminStore:[],
    getAdminStore:[],
    bestTeamStore:bestTeamData,


  },
  
  // reducers:{
  //   loadBestTeam:(state=bestTeamData,action)=>{
  //     state.bestTeamStore=action.payload
  //   }
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.discover = action.payload;
      state.status = 'success'
    })
    builder.addCase(fetchServices.pending, (state, action) => {
      state.status = 'pending';
    })

    builder.addCase(UpdateEvent.fulfilled, (state, action) => {
      state.eventUpdateStore = action.payload;
      state.status = 'success'
    })

    builder.addCase(OrderPostServices.fulfilled, (state, action) => {
      state.orderStored = action.payload;
      state.status = 'success'
    })

    builder.addCase(OrderGetServicesByEmail.fulfilled, (state, action) => {
      state.orderGetStore = action.payload;
      state.status = 'success'
    })

    builder.addCase(OrderDeleteServicesById.fulfilled, (state, action) => {
      state.orderDeletedStore = action.payload;
      state.status = 'success'
    })

    builder.addCase(SslPayment.fulfilled, (state, action) => {
      state.paymentStore = action.payload;
      state.status = 'success'
    })
    builder.addCase(SslPayment.pending, (state, action) => {

      state.status = 'pendenig'
    })
    builder.addCase(fetchAllorderServices.fulfilled, (state, action) => {
      state.AllorderServices = action.payload;
      state.status = 'success'
    })
    builder.addCase(addEvent.fulfilled, (state, action) => {
      state.addEventstore = action.payload;
      state.status = 'success'
    })
    builder.addCase(eventDelete.fulfilled, (state, action) => {
      state.eventDeleteStore = action.payload;
      state.status = 'success'
    })
    builder.addCase(manageUser.fulfilled, (state, action) => {
      state.manageUserStore = action.payload;
      state.status = 'success'
    })
    builder.addCase(makeAdmin.fulfilled, (state, action) => {
      state.makeAdminStore= action.payload;
      state.status = 'success'
    })

    builder.addCase(GetAdmin.fulfilled, (state, action) => {
      state.getAdminStore= action.payload;
      state.status = 'success'
    })

  },



})
// export const { loadBestTeam } = createSlice.actions

export default ServicesSlice.reducer;