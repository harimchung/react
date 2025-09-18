import { Card } from "@/components/atoms/Card";
import { CardListProps } from "./types";



export const CardList = ({ cards }: CardListProps) => {



    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card, index) => (<Card key={index} title={card.title} description={card.description}>{card.children}</Card>))}
        </div>
    );

}