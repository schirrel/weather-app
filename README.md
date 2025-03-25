# PM Weather App

How to work with this code:
- Clone this repository
- Rename the `.env.example` to `.env` and add your [OpenWeather](https://openweathermap.org/) Api key at `NUXT_OW_API_KEY`.
- Install dependencies, `npm install`, you can use prefered pkg manager but we already have a npm lock file in here
- Execute the `dev` script, `npm run dev` or with your prefered pkg manader
- Open it using the URL [http://localhost:3000](http://localhost:3000).


## Architecture
- Used Nuxt to leverage of its structure and DevEx
- Used NuxtUI and Tailwding to speed up the interface development
- Call the OpenWeather inside the server to take advantage of the Service Design Pattern
- Create an id for each city to simplify the GET request.
- Decided to use setInterval for the 10 minute update to focus on frontend approachs (WS would be the better approach but this would required more backend development and this project is focused on frontend)

## Caveats
- Build has tailwind warnings, not something we can handle. See https://github.com/tailwindlabs/tailwindcss/discussions/16119