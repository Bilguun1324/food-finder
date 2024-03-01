import requests

# Google Places API endpoint
endpoint = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"

# API Key
api_key = "AIzaSyA2iQlrsEfhh9zFilAfD5Cvyv8UtIvuNyE"

# Coordinates (latitude and longitude) of your location
location = "37.7749,-122.4194"  # San Francisco coordinates

# Radius (in meters) within which to search for restaurants
radius = 1000  # 1000 meters = 1 kilometer

# Type of place to search for (restaurant)
type = "restaurant"

# Constructing the API request URL
url = f"{endpoint}location={location}&radius={radius}&type={type}&key={api_key}"

# Making the API request
response = requests.get(url)

# Parsing the JSON response
data = response.json()

print(data['results'][0])

# # Extracting restaurant information
# if 'results' in data:
#     for place in data['results']:
#         print(place['name'], place['vicinity'])
# else:
#     print("No restaurants found nearby.")