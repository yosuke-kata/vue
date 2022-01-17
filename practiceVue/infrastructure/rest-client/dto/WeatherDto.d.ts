export default interface WeatherDto {
    "publicTime": string,
    "publicTimeFormatted": string,
    "publishingOffice": string,
    "title": string,
    "link": string,
    "description": {
        "publicTime": string,
        "publicTimeFormatted": string,
        "headlineText": string,
        "bodyText": string,
        "text": string
    },
    "forecasts": [
        {
            "date": string,
            "dateLabel": string,
            "telop": string,
            "detail": {
                "weather": string,
                "wind": string,
                "wave": stringl
            },
            "temperature": {
                "min": {
                    "celsius": number,
                    "fahrenheit": number
                },
                "max": {
                    "celsius": number,
                    "fahrenheit": number
                }
            },
            "chanceOfRain": {
                "T00_06": number,
                "T06_12": number,
                "T12_18": number,
                "T18_24": number
            },
            "image": {
                "title": string,
                "url": string,
                "width": number,
                "height": number
            }
        },
        {
            "date": string,
            "dateLabel": string,
            "telop": string,
            "detail": {
                "weather": string,
                "wind": string,
                "wave": string
            },
            "temperature": {
                "min": {
                    "celsius": string,
                    "fahrenheit": string
                },
                "max": {
                    "celsius": string,
                    "fahrenheit": string
                }
            },
            "chanceOfRain": {
                "T00_06": string,
                "T06_12": string,
                "T12_18": string,
                "T18_24": string
            },
            "image": {
                "title": string,
                "url": string,
                "width": string,
                "height": string0
            }
        },
        {
            "date": string,
            "dateLabel": string,
            "telop": string,
            "detail": {
                "weather": string,
                "wind": string,
                "wave": stringl
            },
            "temperature": {
                "min": {
                    "celsius": string,
                    "fahrenheit": string
                },
                "max": {
                    "celsius": string,
                    "fahrenheit": string
                }
            },
            "chanceOfRain": {
                "T00_06": string,
                "T06_12": string,
                "T12_18": string,
                "T18_24": string
            },
            "image": {
                "title": string,
                "url": string,
                "width": string,
                "height": string0
            }
        }
    ],
    "location": {
        "area": string,
        "prefecture": string,
        "district": string,
        "city": string
    },
    "copyright": {
        "title": string,
        "link": string,
        "image": {
            "title": string,
            "link": string,
            "url": string,
            "width":  number,
            "height": number
        },
        "provider": [
            {
                "link": string,
                "name": string,
                "note": string
            }
        ]
    }
}