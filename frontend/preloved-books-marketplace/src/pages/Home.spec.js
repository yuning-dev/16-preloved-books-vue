import { describe, test, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import Home from './Home.vue'
import ProductTile from '../components/ProductTile/ProductTile.vue'

describe('Home page', () => {
    let mountOptions

    beforeEach(() => {
        mountOptions = {
            plugins: [createTestingPinia({
                createSpy: vi.fn,
                initialState: {
                    productStore: {
                        recommendedProducts: [{
                            "id": 0,
                            "title": "The Hobbit",
                            "author": "J. R. R. Tolkien",
                            "shortDescription": "The Hobbit is the unforgettable story of Bilbo, a peace-loving hobbit, who embarks on a strange and magical adventure. A timeless classic.",
                            "condition": "Very Good",
                            "price": 3.5,
                            "quantityInStock": 6,
                            "image": "the-hobbit.jpg",
                            "imagePath": "@/assets/the-hobbit.jpg",
                            "type": "fiction"
                        }]
                    }
                }
            })]
        }
    })

    test('the product tiles are displayed', () => {
        const wrapper = mount(Home, {
            mountOptions
        })
        expect(wrapper.findComponent(ProductTile).exists()).toBe(true)
    })
})