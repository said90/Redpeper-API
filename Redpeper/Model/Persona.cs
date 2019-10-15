using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Redpeper.Model
{
    public class Persona
    {
        [Required]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Nombres { get; set; }
        [Required]
        [MaxLength(50)]
        public string Apellidos { get; set; }
        [Required]
        public char Sexo { get; set; }
        [Required]
        public DateTime FechaNacimiento { get; set; }
        [MaxLength(10)]
        public string Dui { get; set; }
        [MaxLength(17)]
        public string Nit { get; set; }
        [MaxLength(200)]
        public string Direccion { get; set; }
        [MaxLength(9)]
        public string Telefono { get; set; }
        [MaxLength(100)]
        public string CorreoElectronico { get; set; }
    }
}
