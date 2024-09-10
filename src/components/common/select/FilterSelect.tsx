import React, { useState, useEffect } from 'react';
import Select, {mergeStyles, SingleValue, StylesConfig} from 'react-select';
import { CarSpecificsType, ApiResponseType } from '@/types';

interface FilterSelectProps {
    data: ApiResponseType<CarSpecificsType>;
    queryKey: string;
    placeholder: string;
    className?: string;
    styles?: StylesConfig<any, false>;
    label: string;
    value?: string | null;
    onChange: (value: string) => void;
}

export function FilterSelect({data, placeholder, className = '', styles = {}, label, value = '', onChange,}: FilterSelectProps) {
    const options = [
        { value: '', label: label },
        ...(data?.data.map(item => ({
            value: item.attributes.title,
            label: item.attributes.title,
        })) || [])
    ];

    const initialSelectedOption = options.find(option => option.value === value) || null;
    const [selectedOption, setSelectedOption] = useState<SingleValue<{ value: string; label: string }>>(initialSelectedOption);

    useEffect(() => {
        setSelectedOption(initialSelectedOption);
    }, [value]);

    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange(selectedOption ? selectedOption.value : '');
        }
    }, [selectedOption]);

    const defaultStyles: StylesConfig<any, false> = {
        control: (provided) => ({
            ...provided,
            cursor: 'pointer',
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.data.value === '' ? '#8a8a8a' : '#2C2C2C',
            backgroundColor: state.isSelected ? '#f0f0f0' : 'white',
            cursor: 'pointer',
        }),
    };

    const combinedStyles = mergeStyles(defaultStyles, styles);

    return (
        <Select
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
            options={options}
            className={`${className}`}
            placeholder={placeholder}
            styles={combinedStyles}
        />
    );
}

