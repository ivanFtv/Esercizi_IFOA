import React from 'react';
import Button from 'react-bootstrap/Button';

// Funzione per importare dinamicamente i file JSON in base alle categorie fornite
const importCategories = async (myCategory) => {
    let dataList = [];
    
        const categoryName = myCategory.toLowerCase();
        const filePath = `../../json/${categoryName}.json`;
        
        try {
            const module = await import(filePath);
            dataList.push(module.default);
        } catch (error) {
            console.error(`Errore nel caricamento del file JSON per la categoria ${myCategory}:`, error);
            dataList.push([]); // Se si verifica un errore, inserisci un array vuoto
        }
    
    return dataList;
};

const ListButtonsSuper = ({ categories, setList }) => {
    return (
        <div className="text-center py-4">
            {categories.map((category, index) => (
                <Button 
                    variant="outline-warning" 
                    className="mx-3" 
                    onClick={async () => {
                        try {
                            const data = await importCategories(category);
                            setList(data[0]);
                        } catch (error) {
                            console.error('Errore nel caricamento dei dati:', error);
                        }
                    }}
                    key={index}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default ListButtonsSuper;
