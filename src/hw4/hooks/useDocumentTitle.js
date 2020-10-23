import { useState } from 'react';

const useDocumentTitle = () => {

    const [titleValue, setTitleValue] = useState(
        () => {
            return document.title;
        })

    const setTitle = title => {
        try {
            document.title = title;
            setTitleValue(title)
        } catch (error) {
            console.log(error)
        }
    }

    return [titleValue, setTitle]
}

export default useDocumentTitle;