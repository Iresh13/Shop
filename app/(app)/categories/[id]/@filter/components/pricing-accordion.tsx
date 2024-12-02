import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'

export const PricingAccordion = () => (
    <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
                <div className="flex flex-col gap-5">
                    <Input
                        placeholder="Maximum price"
                        className="no-focus placeholder min-h-12 min-w-full border-2 border-dark-600 text-lg shadow-none dark:border-light-300"
                    />

                    <Input
                        placeholder="Minimum price"
                        className="no-focus placeholder min-h-12 min-w-full border-2 border-dark-600 text-lg shadow-none dark:border-light-300"
                    />
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
)
