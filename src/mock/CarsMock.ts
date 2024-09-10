export interface Root {
    data: Daum[]
    meta: Meta
}

export interface Daum {
    id: number
    attributes: Attributes
}

export interface Attributes {
    excerpt: string
    fuel: string
    transmition: string
    price: number
    passenger: number
    description: string
    rate: number
    createdAt: string
    updatedAt: string
    dealCount: any
    title: string
    thumbnail: Thumbnail
    car_class: CarClass
}

export interface Thumbnail {
    data: Data
}

export interface Data {
    id: number
    attributes: Attributes2
}

export interface Attributes2 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
}

export interface Formats {
    thumbnail: Thumbnail2
    small?: Small
    medium?: Medium
}

export interface Thumbnail2 {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}

export interface Small {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}

export interface Medium {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}

export interface CarClass {
    data: Data2
}

export interface Data2 {
    id: number
    attributes: Attributes3
}

export interface Attributes3 {
    title: string
    createdAt: string
    updatedAt: string
}

export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}



export const CarsMock: Root = {
    "data": [
        {
            "id": 1,
            "attributes": {
                "excerpt": "Known for its reliability and versatility, the RAV4 offers a comfortable ride and ample cargo space",
                "fuel": "gas",
                "transmition": "Automatic",
                "price": 28675,
                "passenger": 5,
                "description": "The Toyota RAV4 is a compact crossover SUV produced by the Japanese automobile manufacturer Toyota. It made its debut in Japan and Europe in 1994, and in North America in 1995, being launched in January 1996. The RAV4 is known for starting the wave of compact crossovers, offering a blend of SUV benefits such as increased cargo room, higher visibility, and the option of full-time four-wheel drive, along with maneuverability and versatility. The vehicle’s name is an abbreviation of “Recreational Active Vehicle with 4-wheel drive” or “Robust Accurate Vehicle with 4-wheel drive,” although not all models come equipped with the four-wheel drive system.",
                "rate": 3.9,
                "createdAt": "2024-02-12T16:39:10.396Z",
                "updatedAt": "2024-02-13T12:13:25.398Z",
                "dealCount": null,
                "title": "Toyota RAV4",
                "thumbnail": {
                    "data": {
                        "id": 13,
                        "attributes": {
                            "name": "RAV_MY22_0052_V001_rDLsjogLtGElk.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 380,
                            "height": 380,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_RAV_MY22_0052_V001_rDLsjogLtGElk.jpg",
                                    "hash": "thumbnail_RAV_MY_22_0052_V001_r_D_Lsjog_Lt_G_Elk_119bb17060",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 156,
                                    "height": 156,
                                    "size": 8.78,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg"
                                }
                            },
                            "hash": "RAV_MY_22_0052_V001_r_D_Lsjog_Lt_G_Elk_119bb17060",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 45.28,
                            "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2024-02-13T11:58:59.397Z",
                            "updatedAt": "2024-02-13T11:58:59.397Z"
                        }
                    }
                },
                "car_class": {
                    "data": {
                        "id": 1,
                        "attributes": {
                            "title": "Compact SUV",
                            "createdAt": "2024-02-12T16:35:19.667Z",
                            "updatedAt": "2024-02-12T16:35:19.667Z"
                        }
                    }
                }
            }
        },
        {
            "id": 2,
            "attributes": {
                "excerpt": "The Highlander is a spacious SUV with a refined interior, strong safety features, and smooth ride.",
                "fuel": "gas",
                "transmition": "Automatic",
                "price": 39120,
                "passenger": 8,
                "description": "The Toyota Highlander is a practical and easy-to-drive three-row family SUV. It offers a smooth ride, good fuel economy, and plenty of standard features. However, the third-row seats are somewhat cramped, and cargo space behind the third row is limited compared to some rivals",
                "rate": 4,
                "createdAt": "2024-02-13T11:16:33.014Z",
                "updatedAt": "2024-02-13T12:39:06.784Z",
                "dealCount": null,
                "title": "Toyota Highlander",
                "thumbnail": {
                    "data": {
                        "id": 22,
                        "attributes": {
                            "name": "Toyota Highlander.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 500,
                            "height": 333,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_Toyota Highlander.jpg",
                                    "hash": "thumbnail_Toyota_Highlander_ac5c5c87ef",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 234,
                                    "height": 156,
                                    "size": 6.59,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg"
                                }
                            },
                            "hash": "Toyota_Highlander_ac5c5c87ef",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 12.1,
                            "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2024-02-13T12:37:21.658Z",
                            "updatedAt": "2024-02-13T12:37:21.658Z"
                        }
                    }
                },
                "car_class": {
                    "data": {
                        "id": 3,
                        "attributes": {
                            "title": "Midsize SUV",
                            "createdAt": "2024-02-13T11:04:01.544Z",
                            "updatedAt": "2024-02-13T11:04:01.544Z"
                        }
                    }
                }
            }
        },
        {
            "id": 3,
            "attributes": {
                "excerpt": "Renowned for its off-road capability and durability, the 4Runner is rugged SUV built for adventure.",
                "fuel": "gas",
                "transmition": "Automatic",
                "price": 42100,
                "passenger": 7,
                "description": "The Toyota 4Runner is a rugged truck-based SUV known for its off-road capability and versatility. It offers a wide variety of configurations to suit different buyers and has a versatile cargo area, especially with the optional slide-out floor. While it may not be the most polished SUV in terms of ride quality compared to more modern crossover SUVs, it provides seating for up to seven people and is perfect for off-road adventures or those who appreciate its classic style",
                "rate": 3.8,
                "createdAt": "2024-02-13T11:19:13.436Z",
                "updatedAt": "2024-02-13T12:46:24.659Z",
                "dealCount": null,
                "title": "Toyota 4Runner",
                "thumbnail": {
                    "data": {
                        "id": 25,
                        "attributes": {
                            "name": "Toyota 4Runner.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 600,
                            "height": 400,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_Toyota 4Runner.jpg",
                                    "hash": "thumbnail_Toyota_4_Runner_89e791b72d",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 234,
                                    "height": 156,
                                    "size": 7.28,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg"
                                },
                                "small": {
                                    "name": "small_Toyota 4Runner.jpg",
                                    "hash": "small_Toyota_4_Runner_89e791b72d",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 500,
                                    "height": 333,
                                    "size": 24.36,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg"
                                }
                            },
                            "hash": "Toyota_4_Runner_89e791b72d",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 16.15,
                            "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2024-02-13T12:44:29.185Z",
                            "updatedAt": "2024-02-13T12:44:29.185Z"
                        }
                    }
                },
                "car_class": {
                    "data": {
                        "id": 3,
                        "attributes": {
                            "title": "Midsize SUV",
                            "createdAt": "2024-02-13T11:04:01.544Z",
                            "updatedAt": "2024-02-13T11:04:01.544Z"
                        }
                    }
                }
            }
        },
        {
            "id": 4,
            "attributes": {
                "excerpt": "With its powerful V8 engine spacious interior the Sequoia ideal for hauling large families or towing trailers",
                "fuel": "gas",
                "transmition": "Automatic",
                "price": 63125,
                "passenger": 8,
                "description": "The 2024 Toyota Sequoia starts at a base price of $63,125. It features a 437-horsepower iForce MAX Twin-Turbo V6 Hybrid powertrain, making it a robust choice for towing and hauling. The interior is well-equipped with tech features, but the third-row seating is more suitable for kids than adults. Cargo space behind the third row is limited, and stowing the rearmost seats results in an uneven cargo floor. While the Sequoia offers hybrid power, rivals like the Chevy Tahoe and Ford Expedition provide better practicality and versatility.",
                "rate": 3.5,
                "createdAt": "2024-02-13T11:20:20.413Z",
                "updatedAt": "2024-02-13T12:21:06.217Z",
                "dealCount": null,
                "title": "Toyota Sequoia",
                "thumbnail": {
                    "data": {
                        "id": 16,
                        "attributes": {
                            "name": "SEQ_MY23_0001_V002_ZH6MPmDUtQPAEsNUDomtnukp_m0.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 380,
                            "height": 380,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_SEQ_MY23_0001_V002_ZH6MPmDUtQPAEsNUDomtnukp_m0.jpg",
                                    "hash": "thumbnail_SEQ_MY_23_0001_V002_ZH_6_M_Pm_D_Ut_QPA_Es_NU_Domtnukp_m0_a09f8d9696",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 156,
                                    "height": 156,
                                    "size": 6.04,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg"
                                }
                            },
                            "hash": "SEQ_MY_23_0001_V002_ZH_6_M_Pm_D_Ut_QPA_Es_NU_Domtnukp_m0_a09f8d9696",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 23.8,
                            "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2024-02-13T12:15:48.136Z",
                            "updatedAt": "2024-02-13T12:15:48.136Z"
                        }
                    }
                },
                "car_class": {
                    "data": {
                        "id": 4,
                        "attributes": {
                            "title": "Full-size SUV",
                            "createdAt": "2024-02-13T11:04:37.138Z",
                            "updatedAt": "2024-02-13T11:04:37.138Z"
                        }
                    }
                }
            }
        },
        {
            "id": 5,
            "attributes": {
                "excerpt": "The CR-V is known for its fuel efficiency and spacious interior.",
                "fuel": "gas",
                "transmition": "Automatic",
                "price": 29500,
                "passenger": 5,
                "description": "The Honda CR-V is a smooth and comfortable small SUV known for its excellent storage space and helpful tech features. The latest version offers a satisfying blend of comfort, practicality, and versatility. While it’s no longer the clear leader due to improved competitors like the Hyundai Tucson, Kia Sportage, and Mazda CX-50, the CR-V remains a benchmark for the class",
                "rate": 4.1,
                "createdAt": "2024-02-13T11:21:30.981Z",
                "updatedAt": "2024-02-13T12:51:51.441Z",
                "dealCount": null,
                "title": "Honda CR-V",
                "thumbnail": {
                    "data": {
                        "id": 28,
                        "attributes": {
                            "name": "Honda CR-V.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 262,
                            "height": 148,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_Honda CR-V.jpg",
                                    "hash": "thumbnail_Honda_CR_V_03f420c78c",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 245,
                                    "height": 138,
                                    "size": 6.42,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                                }
                            },
                            "hash": "Honda_CR_V_03f420c78c",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 6.35,
                            "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2024-02-13T12:50:39.348Z",
                            "updatedAt": "2024-02-13T12:50:39.348Z"
                        }
                    }
                },
                "car_class": {
                    "data": {
                        "id": 1,
                        "attributes": {
                            "title": "Compact SUV",
                            "createdAt": "2024-02-12T16:35:19.667Z",
                            "updatedAt": "2024-02-12T16:35:19.667Z"
                        }
                    }
                }
            }
        },
        {
            "id": 6,
            "attributes": {
                "excerpt": "The F-150 is renowned for its towing capacity and rugged build.",
                "fuel": "gas",
                "transmition": "Automatic",
                "price": 33835,
                "passenger": 6,
                "description": "The Ford F-150 is a versatile full-size pickup truck that caters to various needs. From powerful engines to smart technology, the F-150 offers a combination of features to fit all aspects of your life. It puts productivity at the forefront with available built-in electrical power and a convenient tailgate work surface. The 2023 F-150 PowerBoost Hybrid combines powerful performance with legendary capability. Whether you need it for work or play, the F-150 has you covered",
                "rate": 4.4,
                "createdAt": "2024-02-13T11:23:07.389Z",
                "updatedAt": "2024-02-13T13:27:07.548Z",
                "dealCount": null,
                "title": "Ford F-150",
                "thumbnail": {
                    "data": {
                        "id": 31,
                        "attributes": {
                            "name": "Ford F-150.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 331,
                            "height": 234,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_Ford F-150.jpg",
                                    "hash": "thumbnail_Ford_F_150_83751248c9",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 221,
                                    "height": 156,
                                    "size": 9.23,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                                }
                            },
                            "hash": "Ford_F_150_83751248c9",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 17.55,
                            "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2024-02-13T13:04:06.771Z",
                            "updatedAt": "2024-02-13T13:04:06.771Z"
                        }
                    }
                },
                "car_class": {
                    "data": {
                        "id": 5,
                        "attributes": {
                            "title": "Full-size Pickup",
                            "createdAt": "2024-02-13T11:05:24.614Z",
                            "updatedAt": "2024-02-13T11:05:24.614Z"
                        }
                    }
                }
            }
        },
        {
            "id": 7,
            "attributes": {
                "excerpt": "The Malibu offers a smooth ride and a comfortable, upscale interior.",
                "fuel": "gas",
                "transmition": "Automatic",
                "price": 25000,
                "passenger": 5,
                "description": "The 2024 Chevrolet Malibu is a comfortable midsize sedan with good fuel economy, but it lags far behind the rest of its class in terms of features, engine performance, and interior quality. While it offers a spacious and reasonably fuel-efficient ride, its cabin feels outdated and cheap, and the engine performance is underwhelming. We recommend considering more modern competitors like the Honda Accord or Kia K5, which offer better tech, convenience, and safety features",
                "rate": 3.6,
                "createdAt": "2024-02-13T11:24:10.443Z",
                "updatedAt": "2024-02-13T12:30:46.245Z",
                "dealCount": null,
                "title": "Chevrolet Malibu",
                "thumbnail": {
                    "data": {
                        "id": 19,
                        "attributes": {
                            "name": "2024_Chevrolet_Malibu_6.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 960,
                            "height": 720,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_2024_Chevrolet_Malibu_6.jpg",
                                    "hash": "thumbnail_2024_Chevrolet_Malibu_6_4ceeb8b49d",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 208,
                                    "height": 156,
                                    "size": 5.09,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                                },
                                "medium": {
                                    "name": "medium_2024_Chevrolet_Malibu_6.jpg",
                                    "hash": "medium_2024_Chevrolet_Malibu_6_4ceeb8b49d",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 750,
                                    "height": 563,
                                    "size": 36.95,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                                },
                                "small": {
                                    "name": "small_2024_Chevrolet_Malibu_6.jpg",
                                    "hash": "small_2024_Chevrolet_Malibu_6_4ceeb8b49d",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 500,
                                    "height": 375,
                                    "size": 19.17,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                                }
                            },
                            "hash": "2024_Chevrolet_Malibu_6_4ceeb8b49d",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 53.87,
                            "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2024-02-13T12:28:34.468Z",
                            "updatedAt": "2024-02-13T12:28:34.468Z"
                        }
                    }
                },
                "car_class": {
                    "data": {
                        "id": 6,
                        "attributes": {
                            "title": "Midsize Car",
                            "createdAt": "2024-02-13T11:05:57.340Z",
                            "updatedAt": "2024-02-13T11:05:57.340Z"
                        }
                    }
                }
            }
        },
        {
            "id": 8,
            "attributes": {
                "excerpt": "The 5 Series offers a blend of performance and luxury with a variety of engine options.",
                "fuel": "gas",
                "transmition": "Automatic",
                "price": 55195,
                "passenger": 5,
                "description": "The 2024 BMW 5 Series is an executive car that combines quiet luxury, handsome styling, and a host of powertrain options. Its spacious and plush cabin makes it a pleasant place to spend your commute, while the available powertrains cater to various needs, from fuel efficiency to roaring V-8 performance. The 5 Series has been fully redesigned for 2024, with sharper exterior styling and upgraded tech features to keep it competitive against rivals like the Audi A6, Genesis G80, and Mercedes-Benz E-Class",
                "rate": 4.1,
                "createdAt": "2024-02-13T11:25:26.336Z",
                "updatedAt": "2024-02-13T13:13:36.501Z",
                "dealCount": null,
                "title": "BMW 5 Series",
                "thumbnail": {
                    "data": {
                        "id": 34,
                        "attributes": {
                            "name": "BMW 5 Series.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 262,
                            "height": 174,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_BMW 5 Series.jpg",
                                    "hash": "thumbnail_BMW_5_Series_88649e9df6",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 235,
                                    "height": 156,
                                    "size": 5.22,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                                }
                            },
                            "hash": "BMW_5_Series_88649e9df6",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 5.55,
                            "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2024-02-13T13:11:49.995Z",
                            "updatedAt": "2024-02-13T13:11:49.995Z"
                        }
                    }
                },
                "car_class": {
                    "data": {
                        "id": 7,
                        "attributes": {
                            "title": "Luxury Car",
                            "createdAt": "2024-02-13T11:06:29.268Z",
                            "updatedAt": "2024-02-13T11:06:29.268Z"
                        }
                    }
                }
            }
        },
        {
            "id": 9,
            "attributes": {
                "excerpt": "The GLC offers a luxurious interior and a smooth ride with plenty of power.",
                "fuel": "gas",
                "transmition": "Automatic",
                "price": 48600,
                "passenger": 5,
                "description": "The 2024 Mercedes-Benz GLC-class is a compact luxury SUV that offers a smooth and efficient powertrain, a classy interior, and plenty of helpful technology features. While it may lack the driving verve of some sportier rivals, it compensates with a luxurious cabin and practicality. The GLC300 comes with a 255-horsepower turbocharged four-cylinder engine and is available in rear-wheel drive or all-wheel drive. It’s a great choice for those who prioritize comfort and luxury over sheer performance",
                "rate": 4,
                "createdAt": "2024-02-13T11:26:55.938Z",
                "updatedAt": "2024-02-13T13:29:04.307Z",
                "dealCount": null,
                "title": "Mercedes-Benz GLC",
                "thumbnail": {
                    "data": {
                        "id": 37,
                        "attributes": {
                            "name": "2023-mercedes-benz-glc-class-plug-in-hybrid-110-1654031647.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 640,
                            "height": 639,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_2023-mercedes-benz-glc-class-plug-in-hybrid-110-1654031647.jpg",
                                    "hash": "thumbnail_2023_mercedes_benz_glc_class_plug_in_hybrid_110_1654031647_7a02121c76",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 156,
                                    "height": 156,
                                    "size": 7.14,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                                },
                                "small": {
                                    "name": "small_2023-mercedes-benz-glc-class-plug-in-hybrid-110-1654031647.jpg",
                                    "hash": "small_2023_mercedes_benz_glc_class_plug_in_hybrid_110_1654031647_7a02121c76",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 500,
                                    "height": 499,
                                    "size": 55.21,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                                }
                            },
                            "hash": "2023_mercedes_benz_glc_class_plug_in_hybrid_110_1654031647_7a02121c76",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 81.93,
                            "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2024-02-13T13:18:01.420Z",
                            "updatedAt": "2024-02-13T13:18:01.420Z"
                        }
                    }
                },
                "car_class": {
                    "data": {
                        "id": 2,
                        "attributes": {
                            "title": "Luxury Compact SUV",
                            "createdAt": "2024-02-13T10:42:07.621Z",
                            "updatedAt": "2024-02-13T10:44:06.514Z"
                        }
                    }
                }
            }
        },
        {
            "id": 10,
            "attributes": {
                "excerpt": "The A4 offers a blend of performance and luxury with advanced technology.",
                "fuel": "gas",
                "transmition": "Automatic",
                "price": 41200,
                "passenger": 5,
                "description": "The 2024 Audi A4 is a luxury sedan with more technology and an upgraded design. It offers standard quattro® all-wheel drive, a 261-hp engine, and a 30 MPG fuel economy rating. While it may lack the visual drama of some competitors, the A4 delivers a compelling blend of performance, refinement, technology, and interior quality for the price. Its turbocharged four-cylinder engines provide enough muscle, and the standard all-wheel drive ensures balanced handling and foul-weather grip. The interior, carefully assembled with premium materials, exudes quality, although a touch more playful style might lighten the mood. The A4 remains a strong contender in the luxury compact sedan segment",
                "rate": 4,
                "createdAt": "2024-02-13T11:28:04.923Z",
                "updatedAt": "2024-02-13T13:26:04.701Z",
                "dealCount": null,
                "title": "Audi A4",
                "thumbnail": {
                    "data": {
                        "id": 40,
                        "attributes": {
                            "name": "Audi A4.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 284,
                            "height": 234,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_Audi A4.jpg",
                                    "hash": "thumbnail_Audi_A4_86db4da832",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 189,
                                    "height": 156,
                                    "size": 6.18,
                                    "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                                }
                            },
                            "hash": "Audi_A4_86db4da832",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 11.19,
                            "url": "/assets/images/alain-gehri-w77TcvuhtWE-unsplash01.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2024-02-13T13:24:47.637Z",
                            "updatedAt": "2024-02-13T13:24:47.637Z"
                        }
                    }
                },
                "car_class": {
                    "data": {
                        "id": 7,
                        "attributes": {
                            "title": "Luxury Car",
                            "createdAt": "2024-02-13T11:06:29.268Z",
                            "updatedAt": "2024-02-13T11:06:29.268Z"
                        }
                    }
                }
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 10,
            "pageCount": 2,
            "total": 16
        }
    }
}