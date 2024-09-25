/* tests
- displays the link to home, search bar component
- displays product tiles */

import { describe, test, expect, vi } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

import App from './App.vue'
import Search from './components/SearchBar/SearchBar.vue'
import { useProductStore } from '@/stores/ProductStore'

describe('main App', () => {
    // TODO - add mock pinia store
    test('The routerlink to the home page displays', async () => {
        let router = {
            push: vi.fn()
        }

        const wrapper = mount(App, {
            global: {
                mocks: {
                    $router: router
                }
            }
        })
        const homeLink = wrapper.find('RouterLink')
        await homeLink.trigger('click')

        expect(router.push).toHaveBeenCalledOnce()
    })    
    test('The search child components displays', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.findComponent(Search).exists()).toBe(true)
    })
})