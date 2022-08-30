import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const EventoForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.evento?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="titulo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Titulo
        </Label>
        
          <TextField
            name="titulo"
            defaultValue={props.evento?.titulo}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="titulo" className="rw-field-error" />

        <Label
          name="acerca"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Acerca
        </Label>
        
          <TextField
            name="acerca"
            defaultValue={props.evento?.acerca}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="acerca" className="rw-field-error" />

        <Label
          name="pelo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pelo
        </Label>
        
          <TextField
            name="pelo"
            defaultValue={props.evento?.pelo}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="pelo" className="rw-field-error" />

        <Label
          name="altura"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Altura
        </Label>
        
          <TextField
            name="altura"
            defaultValue={props.evento?.altura}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="altura" className="rw-field-error" />

        <Label
          name="sexo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sexo
        </Label>
        
          <TextField
            name="sexo"
            defaultValue={props.evento?.sexo}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="sexo" className="rw-field-error" />

        <Label
          name="when"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          When
        </Label>
        
          <DatetimeLocalField
            name="when"
            defaultValue={formatDatetime(props.evento?.when)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="when" className="rw-field-error" />

        <Label
          name="prerequisitos"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prerequisitos
        </Label>
        
          <TextField
            name="prerequisitos"
            defaultValue={props.evento?.prerequisitos}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="prerequisitos" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EventoForm
