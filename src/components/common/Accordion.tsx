import { createContext, useContext, useState, type ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

type AccordionContextValue = {
  openItem: string | null
  setOpenItem: (value: string | null) => void
}

type AccordionProps = {
  children: ReactNode
  defaultValue?: string | null
  className?: string
}

type AccordionItemProps = {
  value: string
  children: ReactNode
  className?: string
}

type AccordionTriggerProps = {
  children: ReactNode
  className?: string
}

type AccordionContentProps = {
  children: ReactNode
  className?: string
}

const AccordionContext = createContext<AccordionContextValue | null>(null)
const AccordionItemContext = createContext<string | null>(null)

function useAccordionContext() {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error('Accordion components must be used inside Accordion')
  }

  return context
}

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext)

  if (!context) {
    throw new Error('AccordionTrigger and AccordionContent must be used inside AccordionItem')
  }

  return context
}

export const Accordion = ({
  children,
  defaultValue,
  className = '',
}: AccordionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(defaultValue ?? null)

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={`w-full ${className}`}>{children}</div>
    </AccordionContext.Provider>
  )
}

export const AccordionItem = ({
  value,
  children,
  className = '',
}: AccordionItemProps) => {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={`${className}`}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

export const AccordionTrigger = ({
  children,
  className = '',
}: AccordionTriggerProps) => {
  const value = useAccordionItemContext()
  const { openItem, setOpenItem } = useAccordionContext()

  const isOpen = openItem === value

  const handleToggle = () => {
    setOpenItem(isOpen ? null : value)
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-expanded={isOpen}
      className={`flex w-full items-center justify-between text-left text-sm transition hover:underline ${className}`}
    >
      <span>{children}</span>

      <ChevronRight
        className={`size-8 shrink-0 transition-transform duration-200 text-[#808080] ${
          isOpen ? 'rotate-90' : ''
        }`}
      />
    </button>
  )
}

export const AccordionContent = ({
  children,
  className = '',
}: AccordionContentProps) => {
  const value = useAccordionItemContext()
  const { openItem } = useAccordionContext()

  const isOpen = openItem === value

  return (
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <div className={`pb-4 pt-4 ${className}`}>
          {children}
        </div>
      </div>
    </div>
  )
}