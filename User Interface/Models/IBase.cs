using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace User_Interface.Models
{
    public interface IBase
    {
        T MapToEntity<T>() where T : class;
    }
}
