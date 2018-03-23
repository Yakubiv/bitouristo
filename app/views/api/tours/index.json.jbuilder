json.tours @tours do |tour|
  json.id tour.id
  json.name tour.name
  json.price tour.price
  json.status tour.status
  json.date tour.date
  json.places tour.places
end
