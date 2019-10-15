using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Redpeper.Model
{
    public class Empleado
    {
        public int Id { get; set; }
        public int idPersona { get; set; }
        public virtual Persona persona { get; set; }
    }
}
