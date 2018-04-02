const RoutesURL = {
  // Navigational routes
  get_tours:  (name: string = '') => '/api/tours?name=' + name
};

export default RoutesURL;
