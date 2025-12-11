import { render, screen } from '@testing-library/react'
import Contact from './Contact.jsx'

describe('Contact', () => {
    it('should render', () => {
        render(<Contact />)
        expect(screen.getByText('Contact')).toBeInTheDocument()
    })
})