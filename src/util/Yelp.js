const apiKey = 'AC9BMa_TuoYI8LXOufd6t9vrsspjKYE2QxRsHNt8XEz79VYzqpXxY94EP0P4YUvBifg82QJccduLQJr_yCGAesga2qR1C_CQupq6LJt1t3AHN7A7DBqSBgzmQYOaYHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        adress: business.location.adress1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                });
            }
        });
    }
};

export default Yelp;