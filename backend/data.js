const cars = [
    {
      imageUri: "https://listings-prod.tcimg.net/listings/5611/34/46/1FA6P8TD8L5154634/5LB2JFDAGUEC7Z4IRIQYZ4WEZY-cr-540.jpg",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N-soVHaIoT2ayeTJ7cIKwtBdwVOOrcffYIswtfkMvj1mdc55A2JjXS1q6xa4aYDcmBs&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbn_q_Ce3exPorou9ZjVdeG6ER6NOcERVsXpqgCIm4HGzkXjxYMqhi4thC_T08cYR7lU&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStC2EL-N-d901yLMXKna0LyKzjNBYuEOyZTqV0WOMh6v_N4O1avhkdAtwfaRv-YFBpVbw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJz8fSoBxb9rHi8Os9h2qe7jo8c9HnAJTVr0sAO4i9NwjIxoDWkiNLxAmzNN9hF8i5Duw&usqp=CAU"
      ],
      title: "Ford Mustang",
      description: "A classic American muscle car with modern amenities.",
      price: 1212,
      year: 2017,
      mileage: "40,000 miles",
      fuelType: "Petrol",
      transmission: "Manual",
      location: "Boston, MA",
      seller: "Ford Dealership",
      contact: "555-5432",
      kilometer: 64374,
      color: "Red",
      vin: "1FA6P8CF4H5300000",
      postedDate: "2024-06-25",
      insurance: {
        provider: "Geico",
        validUntil: "2025-06-30"
      },
      rc: {
        registrationNumber: "MA-123456",
        expiryDate: "2025-06-30"
      },
      owner: {
        name: "John Doe",
        numberOfPreviousOwners: 1,
        contact: "555-5432"
      },
      serviceHistory: [
        {
          date: "2023-05-15",
          details: "Oil change and tire rotation"
        },
        {
          date: "2022-10-10",
          details: "Brake pads replacement"
        }
      ],
      ownerType: "Second Owner",
      inspection: {
        status: "Passed",
        date: "2024-05-20",
        details: "Comprehensive check including brakes, tires, and engine."
      }
    },
    {
      imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIEj9sBnYD9Iy_AxB2qD6fVA_S715M6mRanvWCtMf1UuLyp-vNnSNM3KQkQPP0IzUIO4&usqp=CAU",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0pBf3rnwY2Z54tie7z_7-q-QhXj-SMIazaNzTMAavKqI-6vLnQqJdXj4OTJp_YbbnOQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDifuSE9txIQoQMy0A5VuSPw6aLsEqrAY9Sv-Lvl2yXs0DuqctUBwMOD3p9h269PZqQs&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBGURYkn7pZAH4YEt1TvqVz8rd6-TuUlLueR28Wqu7uxx1rKNWpPVLS_33GcTI0YfEm4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDifuSE9txIQoQMy0A5VuSPw6aLsEqrAY9Sv-Lvl2yXs0DuqctUBwMOD3p9h269PZqQs&usqp=CAU"
      ],
      title: "Toyota Camry",
      description: "Reliable sedan with great fuel efficiency.",
      price: 3434,
      year: 2020,
      mileage: "15,000 miles",
      fuelType: "Hybrid",
      transmission: "Automatic",
      location: "Los Angeles, CA",
      seller: "Toyota Certified Dealer",
      contact: "555-1234",
      kilometer: 24140,
      color: "Blue",
      vin: "4T1BF1FK6HU300000",
      postedDate: "2024-06-20",
      insurance: {
        provider: "State Farm",
        validUntil: "2024-12-31"
      },
      rc: {
        registrationNumber: "CA-654321",
        expiryDate: "2025-12-31"
      },
      owner: {
        name: "Jane Smith",
        numberOfPreviousOwners: 0,
        contact: "555-1234"
      },
      serviceHistory: [
        {
          date: "2023-12-01",
          details: "Battery replacement"
        },
        {
          date: "2022-06-20",
          details: "Tire replacement"
        }
      ],
      ownerType: "First Owner",
      inspection: {
        status: "Passed",
        date: "2024-04-18",
        details: "Battery and tire check."
      }
    },
    {
      imageUri: "https://imgd.aeplcdn.com/1056x594/n/ctoa6sa_1475148.jpg?q=80",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGi9sKPCIgaY74HjSat24m-ImoIF_Bn5x5lQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzk5j0q7hKwa2AJY-4uC5Cl5WflQLP144deQr5BrQvQlUCbLAUy7w8hkjWKqXIL4r227c&usqp=CAU",
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUREhMVFRUVFRUVFRgWFxUVFRUVFRUWFxYXFxcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGRAQGy0lICUvLS0uLS4tLS0tLS0tLS0tLS0rLS0vKy0rLS0tLS0vLS0tLS0tKy0rLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAECAwQGBwj/xABDEAABAwEEBQkECAUFAAMAAAABAAIRAwQSITEFE0FRYQYUInGBkaGx8DJSwdEHI0JTcpLh8RWCosLSFjNDYpMkY7L/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QANBEAAgECAwUGBQUAAwEAAAAAAAECAxEEEhMFITFBUWGBkaHR8BRSccHhFSIyQrEjQ5IG/9oADAMBAAIRAxEAPwDlg1KFYGp7q90+PzFcJ4VganuouLMVQnuqy6nupXFmKrqV1W3U91FwzFV1K6rbqe6lcWYpupXVbdT3EXDMU3UrquuJXUrhmKbqV1W3UrqLhmKrqV1W3UrqLhmKrqV1XXUrqLhmKrqV1W3UrqAzFV1K6rrqV1AsxTdT3VbdSuoDMU3UoVt1K6mGYqhKFbdTXUXHmKrqUK26ldRcMxVdTXVbdSup3HmKrqSshJFwzFurT6ta9Un1SDm1DJq09xa9Ulqkg1DJq0+rWvVpriQtQy3E9xabiVxAZzLcSuLTqjuT6k7krlJtmW6ldWrm53Jc1KV0Uoy6GS6lC181KXNClmRenPoZITQtnNClzQozIenPoY0lr5olzQpZkGlPoZISWo2UpualPMg059DMlC0GzFLm5RdCyS6FEJQr9QU2qO5F0S4yXIpup7qs1Z3JrqoneQupXVOEoQK5C6muqyE8IC5VdTXVdCa6i48xTdSuq66mup3DMU3UlddSRceYLCgdykLKdy6IWJTFjWLrI1js6T4s5wWIqYsBXRCyKQsqh1zojs1czneYKTdHroeapxZFLrM3js+K5HPiw8FIWJHuaJxZVDqm0cHFcgELHwT80RzmnBPzRTqmqwyQC5qm5qjvNEuaJahXw4CNlTc1R3mnBLmiNQfw4B5qm5qj3NEjZEtQfw4B5qm5qjvNUxsqNQXw4B5qmNlR42RRNkT1BfDgLmqbmqOmyKJsieoJ4cB82TGzI3zVRNlT1CXQAnNkxsyNmyqJsvBPUJeHAbrJwVZsYR42VQNmVKqZSwkXyAJsagbIUfNlUTZlSrGUsFE582c7lE0yNiPmzKs2ZWqphLA9GArqUIy6ycFQ6xKlURhLCzQMhJbzY0lWZGejU6HoYsykLMiQop9UvMzn16pIHCzJxZ0RFJS1KnMXpg3m6fm6I6pLVJZh6YO5ulqER1SWrSzFKmgdzdPzdENUmNJK5WmgfzdLULfq0xpouPIjBqE2oW/VpGklceQwahNqVuNJLVBFx5DBqUtSt+qCWqCLhkB2oTGgiOpCbUouGRA42dRNnRI0UxpIuJ00DTZlE2ZEtWm1aeYnSQMNmUTZuCK6pNqk8xLooEmzqJsyL6lMaCecl0UBjZeCibMjJs6Y2dPOQ6AENmUDZUbNnUDZlWch0QG6y8FW6yo6bMoGzKlUIdBAE2ROjXNuCZVqGfw51YYnDVYAnurmPSsVXUiBmmtOGOOCrdWwvAbRtgETEgp2E3Yeu66JzG3t2qTce6Vgt9cXcNsAgnAGQDK32R0tmM+zJNrcKMryJ3UoU4TQoNSEJi1WQqq1RrGlz3BrQJJcQABxJQO40Ki22unRaalV7KbBm57g1veVwnKz6TKdKadmgkYF7hP5WHLrdl7pC4Ko23W1+sLYnKpW6Th+EOHR/ka0LspYOUt8t3++/djjr46lSV219XuR6dbPpGsLSRSNW0Efc0nuH5nQD2EoTaPpMf8A8ejrS78Ut8mlcrT5J1XD621VSdzcB/VPkuFtFO5ULHuIAcWkjE4GCQDE5bYXWsLRjxjfv9LHFR2nHENqlLh2ep6pW+k+1jLRzh+I1D/YFgqfS5aQYNmpjgb8+JXE2Kg0MdWFocBTLJplt1z70wAQ8jYcVnbpu0FxmsQDJhxL2DAmA1wcI2ARu61ajQX/AF+ZtqTl/Z+aO+H0vVttCn3H/JXUfpdf9qlT7n/Nef2O2Gs4MNmZVd/9bTSf1zT6PaWlW19H0Zu330H+5aGwOyq0QRxLWhbRp4V/1XevRmblK9s7v9fselUPpXac6TT1OI85RGz/AEm2d3tU3DqcD5gLxi26KqUoL2kA+y4QWu/C9uDuwrPOEGQd4xnrHrqVywWHtfT8GxqdblUfel6H0JZeXFifm9zPxN/xlGLJpWz1f9utTdwvAHuOK+ZaVqDfaaDxzRKzaQp7abO4Lmez8PP+MnF9u/7D+LxEOKT7rff7H0rcTXF4hojlTUpRqnvaBsDnFv5SS3wXeaG+kOm+G12wfeZHi3Z2dy5q2y60FeP7l2GlPalNu1ROP14eKO0upXFXYLdSriaVRruAOI6wcQterXnOLTsz0IzjJXi7oo1ajqlpuJ7iRRl1SbVLXcSuJisjGaSiaa23ExYgVjCaKiaC3mmoliLiaMGoTrXcSTJyoz/6gs2RrNnt+Sm3T9m2Vmd/zXhwrnin1uzEHZMR+i9+WyaaV8zPBjtOs3bKvM9vtOmrPdM1qZBzF4E+uKw2XSFnummarLmN03sQNknORl1BeTWS0wbr2nODw6xuU6dc3ogyDhhu3ZE74XPPAxi7K798jrp4tzjeVk+m/wA2elu0lSd0X1WAXmhxvAgtpuEFu0kzn8iiVTlTZWwNZwAAPxgLzWhSNVrAPaAcDGJDr7pnYMycYWKpVZSnX1KQwwDH6x8/hbIHaVNPDUajt+7uX+hUr16cbpLkepnlhZt7v6P8lH/WFDYD2upj+5eMV+UjGn6tt6DhfiD1gIfU5RVzN17WfhbjswkrseyqK5nPDGYyXFJHr+k+WzzVFGzNpCG3qjnubUImLrRTY4HGZvHDdOzg+UnKC026q2zNqdMOffDRcpsaCA120zGJOJ6UDaFxlt0jUDhVoHV1Iuuc1zi543vvkgnAZR4LDZrXUBJcG3jEksYZjLEjYFisOoTyqPebf8025SndWVl2836HoNho6NscOqVtbVH2oDoP/VoJu9ZxW/8A1hYMw6pnh9WcepcFZ9M1QMCxu+KVEf2K3+P2n75w6ro8gu1UZW3M8+ps+lUlmqNtnpNHlTYCP9wjeC0Ag7i0mQrhpuyPbeZSqVB710BmcYuBIbkc4yXmot1tcYFSsSdjXSe4GVXb7XbaLzTqVa7HgAlpqPBF4Bw27iFDw7e7MEdnUFyNXLe2vtFa6ym4U2CAGgkTtMgY558SudbYKv3VT8jvkiP8UtH39b/1qfNMdJWj76t/6P8Amj4J9T0IuMYqMeCOk5LaYZZ6WrNmcx+1xpVHh53m7jPDIQi1s09rmXDY9c3Cb1nqNHXeeQG9a4F1urHOrVP87/ms9Z7ne0XO6yT5o+DfNs5nhaLk5W39ToqV2jVJZUp0KDj9ZQe8WkO3jVMvgGNrnSN6GaWr0HVXGg0tpmLodmMBO0wJmBJgbULI4KJC6KEdDernS96sW1KbSqGywy0x3QeBBwI4EJFMUqrhPjEqKaC+gdO83ffdSpVoBAbUBDQTthuBjHAiMVdbdLOrVnVm06dIOjoMJuAgRIAGEwgBCTTuWMFld9/iTKlF8jr9H6YewghwaRtDiCO2F0di0yyofrXYn7TajgestyPgvOG1nAAyCO8jr2hTGlXjJrO4n4rpqaFSP/IvU5FhqkJZqTs/fFHq4sgfGrrXm5uu1SHYxMNcRJ4BYrRScwlpc5uORNUYD1sXnTNPVhk8N6mM+IKvHKa1Rd5zUjdAjuGC8uWEpJ/tbt3fk7liMTazUPB/g9Cp2aiT0rQRhhhVInGZkzhhsKpp2mo04Wh8A/Ze9sjHEblyGhbXXe8DXNdJEio0we1pkda6a10XMcWOwLTBGfdvGS3p7Poz+by9DirbTxFLc1Dwfqb6WnLU3K01Mxm9zhhGwzhmi9XlhXD+jWa5sYX6QaScJBDXYDPeuQJUZWv6XR7ffcc/6viOkfD8naWfltWum+6je2Q14Ed65/SemrVVdHOnBpmbpLRB2ANAyQi8leO5P9Oovh5BHaeIjudn9V+QiLbV22qsTlOsqCQMsOqEkNvJJfplLq/H8Gn6vX+WPg/Ui1o3+a017AWxeB7nbRhiRBzV+jbDeLy4tLWe1iROeR6wDxHWrNXUdSmmwm8A0XemSL5mcYE3hvjDGFzV9sUlUUKTTtx6b+j6pbzbD7KqODlUTXTru7Oj4FNQU9XTDZc+XXyZa1o+wGxN7fjC20K1FtN1Wphq4g3vaIDrkyMPZOMZIfamMNdtmpuILb2sJODi3Mtb9qOljggvLW0io8Wek6GwDWIIMEYBgugA4/2rmhtOjXbyJ833XsuXPpyS3nTHAVqWXM1yXrd35deb4WAmkNNX+iaznZ5m63sY2AB1rO2lPFF7PYrLQaS5tOWRrNaXOeJN0S2n7OJEgwRuWjTWj2MY2pZwzFjaj203ucGsf7LjSeL7OuYx2Lehj808tRbuw3nhssbxYC5s33fNO2yt93zVL65OM90jyVbbQ7ee8rs1qSf8TnyTtxNws7fdHipalvuDxWYW9+8dyRt7947gtVXofL5IzyVPbZo5u33B4/NPzdnuDx+azNt79/gFL+Iu4dwVqvQ+XyQOFTr5ssdYmEyWCe1TdZmn7O5ZzbXb+6B8FB1rdvPejWofL5IeSp18zZzNnu+JT80Z7viVkFrf7xTi1P8AePcFar0Pl8kTkqdf9NRs7dx7z81HVjj+Z3zVXO3bSD2D9FjraXjAeAw7yipjMPTV2rdyKjSqSCjWDce8q9lIbkCpaWdnBjfEjyRaxaVa4Y94xHbtC2wmPwtV2Ts/AitQqxV7GoWYbgrG2NnuiYMdcYdkwkbYzfPUpULU0n2o7/PYvRk6Ulbccuaot5no2QXgx5NPEYkYGeIgRjsXV6Z5B1S2nWptZVFRgcbldkXgSDEv6WQMicyq9HWsMe0wCBsOS9K/h1lt1kuilTvNBLei3AnOMMF8fjtnSoSTzOz5vl9T6jB//TwnDJKjFSXYmn9E7W8TyB3Im0NPSsVUjPo1GkxtjHjuWV3JCuM7FaocYYYmZyBIwJ81fp/Rb7M9zW3mEH7LnN8igp01agLotNcN3a18d0rKrsmtTs8yafa/Q6KW36NVZlTX/iPqVaa0O+zvDXtc28JAcIMSRtzHFYW01qp2mXFzxfcQZLyTJIInrEz1ha7TpBjmhooUWRHSZfDjAjEknryW9GDhG03c8zF1o1ajlTjb35GnRNKncByqB07cRLRdyjeZwyPBd9aGh9FlTAOAAOQvNxGA2wQJ/GF5nStrh7OrHWXHyC6fQlWpWfTNSu0tY72AxxF1wLXAZAGDn1LspVHuUE+PlzPHxNHNdzaSt58gm5oVT3QYAzx2Qt9os115ZgXNnIkgtAwdOyQRh1rNaaPsEHiBnJ2DsJ+aKuO/a8n199pGG2X+6Op9O/fw7OG98TM1gxkRIwwiXThjOGBUTWkYATs3YmIPh2rVWcOkA4Xg0kRAxEEZyDvWc1GmY9p0zmO+O/tC82W0ZRvbh5+/v339lbLpySb4rw9/butJgaRMDtGPjikp07XIENJ2TE4jA4zvSW0dpzaXDwZl+j0e3xOvsnImoxzjeouDiZGqe0bdheQN+W0Kizcj3sIxpw3/AGmnWNulsXrxHtSD1zJXS0+U1A/8kdbXn+1aRp2gcqrc/tSO3JfMyop33eb9T2Uzh7RyetArutDm2d76rS3EvADSScBAu4AT1DFef2mkylUtBe4suONMPbDi2ofbcA4gugEDo4gVMuivda+lKWyrScBhEtG7EEnIdS8k0zfNpt1Nta4S8WlrmjWB7Kgh3RaDMOA6pOK2w1PI2krfgzqu6QM0Vok12mqX0zUe0UjVDiWPfIdQdgJv3msDmkXjnGaPaVsHtU2CjSJpGnUtNRouspMc6mG3/fc0NF3MXTOMKnkdpdrS01nVRTZfeagp0m3hRp1HkuY1hu08CPaJLgBHtBEa1uZWtTDMw9zBUqUBWZrphzAGgOp4i83BwLTOC6u0y7DzPm84DHHMbeIVZsrsZ37Ub0xYKra9RlVtNrw7pijApAkT0Nwg5bMkMqWF/uk9S9WN2lLKzhdk7XRQ2yE4DzCuGjKm7xHzVTrO8bHDsKg4u953e5aRlBfyi/fcRKMnwaNH8Lfu8W/NSbop28Dt+Sxl7ved3lMKj/ed3lWqtFf1fj+CMlTqvAIfwp29veUw0Y6diwGo73nd5TNc73nd5V61H5H4/gWnUX9l4BB2jnjGO4grOacdipk7z3lSaxNzg/4x8/wCTXFmS21CSKbcSYyzM5BHdC6GY1grVADJIvvvBl4Zim0Y1CMJMtA3zgqOTejtdamtg4yCRm0QS5w3kMa6OMLqtO0782Ro+orNAs9RuDG1mC6ylE9CRDC043rs714laTnUbZ6FOOWKKQ2mH1Wa6leom68autSA6Yp+0XOnEj9M0tI8lhUp65nRqAS4jL+aMHtxGIJzBBIIKWkuTr3Cq98sbW1TnvINxradB1SqXOiLoqPA4lhGaP8AI+q+XUdWdXSpA05Eau64h1Kudpc0ucfdl7eJl7t6KW/czztjSCWuBDm4OG4rVRFIYuJJ3AQEZ5U2BrXuc37JEcaboLO0TC5tzYX0GDxTlTUrXZ5mIpZZuNw5S0lTEDpdwAHeV0Og+WIs0uBIG2YPxXCscpCXujY3xd+g8+C7p1tWOWSvfkcLw0c2bfu53Oh5R8sTa3TqgBvOBPYFzN2/JDevpNA/qIWi0Wcws40abt9xw4Z7fkuWrGuoqnHh9Drw+hB5pJ9z3vvs/wDCi5E/7fbUmfygpwH3b5axrSboJkyRnAT0qFMHpEnrcGj12rTanOqXPrKbW0wQwQ3CTJxHtHicVwKNSN87v4I6qs6UmskbLvfvwN+g9D1bRfLGvdciRTo38/5sO5U20Wiz1Q2q2qKbmy0GaJdBAJluz5oxyG5QULG20a515zzTuAGL7RIcCbroz3bldys5W2a1ik5rKmspOc4QDF1w6QLsMJazZvWLrb8r8b/bmiFTWa9r9333b+8fRNRwpNeM2z0ZOLXOcA7PHLHqUrRXgxh0csZMbPh+ZGeSvJx1toCsXCmDebdYJF0bZvHa52CN2/kM983HUmglpxDwSADIMee8DjPi1KrUnG/u57dNLLc4Oxw+o3JrSRwgTiSBngYwVmkyNbVZDRccWktJuktAaYOYHXuidq6k/R9aL4IqUwMDDC5pDsMQTTIAzw8Vmt3IC2PcSH0bsl12XzjMC/d2TuKlzuyuQBo2iABI/p2470kYP0f2w4kUv/aoOoewnUWvvv8A4TdhrV4qTac7FIO4j1KsbVEDEbuzrhbAZnUGnNv9IQfTeiC4srWctZXpElhjovafaY8bWldGyp1d8q5tYR69Qi7XAGk9xwDLfZKl/W1X2O0GGVRVBdSaGvB+rNNuQuwGkRicTtnV5RWWzve9tqFe8ACykwNbUc1o6bqhaHNxmADA7V3lQs2taevFUOoUj9hv5Qq1OwjT7Tw/SOmalWq6oHRJGDRLQAAGtAg4AABRZbq4xPRacLzmEN3xLWr25tkpZgeER2LFbdDWeri9tNx3lgJ79ypVmiHQPGmaZeNg7C4fFWDTbtod+afML0+ryIsTvst/lc9vkYQ6v9HNnPsVKje1jh3RPitVi5r+zM3huxHCN0w05z+Vp+Kk3SFI5kflI/tXSWr6N3gkMrNO68wt8Q4oXaOQNqbkKbvwv/yAWqxtT5jN4ddDILRSO1v5m/MK1oYdjo4YjwKw2jk1aWZ0X9gDv/ySh1ayuZ7TS38QLfNbLHT5pMzeHj2o6DV095HYVPmjIkVG9RIB8Vzbarxk53eVa22VR9rvAPwWix/WCIeHXU7r6LKd61ODQ1ztXXuhxIaTdOBIxGE4oxoawNfa3/V1ad6q1lVj3Un2d7nOhrpqBrXYiBBvjYJXG8hNNai1sqHoy6S5uBgiDAiJgkrvOUljFCv9XaTaKlS46zOqQX0L4PTD2t6BIJAF2JIJyXnt3bZ1rgdfaKVMU6mse2o5zXmqXU3uY9tLAPa2QHEFwxbMRhGC5PQ9SlVLJtjb4cGNpMaKVFwdeDxq6rA4PcJBuxlxKidKucbtes5tIWl1kFSZcx8UzZ6pIxwdTcDOwu4KgWtxFWnaaFy0WWp0KjA1tOtWe11NjroyeGkOluBDCcICp24Eq/MB2+1Gr03R0mgHLe6J25RihVpsrW4mpTP4Xtd4BK3Wprdu3Dqbl4oPW0q2T0P6sJ6owXXhMWqKcWr3MMRR1GncIODB9rwKPaM5WU6FNtLmlCqG5l7MTJkmRBxlcWdIzsA9cVB9t3HHccv6YXTLH3V0l77zBYVc2dPpHTuudLaFKlwphwHbecVl1NSo1xvdFgvvN4MY0TE4kbcMcTuXOVdIF0AtAjdPmSk231Tg15aDsBgcJ35rnrbSrVI5FJ2NqeFhB3sGdH0mPdAGGbqjgRTaNpc5xEdxV1Wymo//AONTNZocGtdqiwHe6SIu9aFUjte8vOyTIHUpNqQZBg7xge8LKNN2u+I3UV+w62x8k7W+SG0abY6Je9uJPCkH4DciNm5HVg4CpaqIbdh11r8Z9o4tE4SIOC4pmmK4IIr1cMvrHnzK20eVlrGJq3/xtafEAHxUShU5SNIzpc0e46IqWejTbTZVEDOcTJMkk/aJMknii7NI0YgVmd8YSvHeTunWWt4p1GPbVgmab3tpkDbAPRz/AFXTU7GGYy934nuPmYXDKlZ7ztjJSW49A57S+9Zj/wBm/NT5w26SHsPC835rgtV2dyhVazaZ7vQU6a6lHofOB7zUl53eZv8AFJPIKxoa+fH1wUr3efXxQwVxvx7tymbRjgY3+u7vVWC4TBIxxx8J2qTa3HPq4oayqNnd88etWNrcMY3hKw7hNtQzv7D8FIVMcxsnvKHC1bcvjH7qTLQd849cD1KVguEr/VAk78kxqcB2Yeslhbats+XirBXjDt60WHc1AcI4FRIkHbv71A2nZlh4QFFto6uE4lKwXLQ3BUGkZ8+JV5tAic+wdnVsUWVMfWB78EAZjYW5yW9cFMNGjCekD1ELYKgwHrtS6G7Lw7EAC6ugKFT2qNI8TTafGJWG0chrG7/ig/8AVz27NwMLqC+n7uxOyqzMNg8TvSvJcBOMXxRwdX6NqJN5lSqyMvZd5tTO05V0eXWWux1WzgtdRquZDmmAQWnIlrpF2dmycfQQ6fXrcqK90iHNHaARu7Vcakk95LpxtuPPrXp6w1LO6zvNR7C9rwCCXSC8mSXQD09kIXprlWasOxENutBPsi6GFzj9p5AxdxMZrvLXoCyvxNCkT+ADbvAWE8k7F9wzdMZFXqroRpvqeS2p5Ivy0zhg9hI/km8O5ZqVje4Eta5wAJJAJAAxJJGAC9noaCs7MadGkONxo8YxyWh1AEEbN2ztCNTsFo9p4YKSlqV7LV0bSxmnT7WMPwWV+hKB/wCGljiPq25egq1F0JdJ9TyTVJateqO0DQ+4p47hHraonQdn+4Z6jinqR6C0pdTy4NU6bCTAkncMT4L1SjoiztOFBg62gkd8opRYwYABvAANHcnrW4IWg3xZ5PZtBWmp7NF/8wuDvfAKPWDkLVdjVqMYNzZe74AeK9BDWnievf68FNtMfru4dxKTryLWHjzBuguTNCz4tbLogvcZdgeqG9iLtpgDL4p2Rtw2fH4qIIywGPGexZNt8TdJJbid0bu7aVFzBtn+pRvDLD9N57U5rDfjwQMQISVcn06PBJFgOYZV3esFJtSNsdvksIccnQd2yT1J2OJx9Ba2MLhMV/IdvDirKdfZIQwVCcP0wTtdE4jcRht9eKVh3CvOJ8pw+OStbaMhewPAeuCFitHruTh23H4+sErDuE3VZIN7du8p8laK0faOeZw3whJflgR6/ZSNfDMjdww4JWC4XbaIxvRs3Rn67VZzgYSZ6sdkbEHbaCBnHbuxTstB8eElFh3DHOgcz+2w98KQtI6/HchDLTjjGOG5WCsCJukDsmfQSsFwsLSM+OHlgmfW3DhmfLsKEuqicMt23f8AFTZXGIBwx3H1mEZR3C7Kw4xn+yYWkHAHGd+efFCRaDvy9beIU6dUd/hvySyhcKtrjiOqO/BWNtJHxw7UKFXHt3we/rCcVRvI34+SLBcJG0SDl8lF7pxw8d6GPrDATll2JzUMGcZwB2mBkiwXCE7fX7qBdJg8d+Bnr4LC+t63JMqnDLy4bUWC5teBtMcMswouAOIOA+O1ZhW6tx349Src8ERiM+E5RknYLmu4AYkeCjc3xHhhHwWTWGMyI2dZwO5J1UyOHBFguag2MccvWSi1w3jHaYlZOc5YfDgpOtOUjOetFgubWkZROE8I9SnLhnju+SxOtUmJwx8SkbRhnwEmf2RYLm2s4jFuO6ZIyEbVRrn7RPAET+ip14+I28Zz4+Ki2v8AqT8+5OwXNba5wG0QUnVzGzLqWN9bHEjbBjLD91F9fHMTs3H1CLBc1a933bTxkfNJUG0f9j+cDwTp2A59p2A78x63hM3DGezfCSSoyJgwI39+fruU6bpEfDzx60kkDJuG/CI27UsjuzSSQA7cYictuwDqUt+Xz9YJJJAWAYTHopFvbGz9SnSQMfMTwTXgfXrgkkgBwcPUKQOZyG3fmJSSQwJNeNxnr4pxUnbxHaUkkAOxwI/fMcE7XGY25nL12JJJAMX7D4qYdBGPduSSTGPewAB3gJMk4Dj2RiUySAGDjjwOO+Y49iRqREk5T2HbG9JJIBVHgccvUd6rOJ6JKSSYDA4xPSgYZyTlJUmujFJJADXSezsj9eKYiN8kb9mzHvSSSAp2x++GGaY1YJ4Hy+KSSoQxdnJzjHbj+ygKgxPUMsykkgCRtAG3zPwSSSQFz//Z"
      ],
      title: "Mercedes-Benz C300",
      description: "Luxury sedan with top-notch features and performance.",
      price: 5454,
      year: 2019,
      mileage: "25,000 miles",
      fuelType: "Diesel",
      transmission: "Automatic",
      location: "New York, NY",
      seller: "Mercedes Dealership",
      contact: "555-9876",
      kilometer: 40234,
      color: "Black",
      vin: "WDDWF8DB3KR000000",
      postedDate: "2024-06-15",
      insurance: {
        provider: "Allstate",
        validUntil: "2025-06-15"
      },
      rc: {
        registrationNumber: "NY-789123",
        expiryDate: "2026-06-15"
      },
      owner: {
        name: "Michael Johnson",
        numberOfPreviousOwners: 2,
        contact: "555-9876"
      },
      serviceHistory: [
        {
          date: "2023-07-10",
          details: "Transmission fluid change"
        },
        {
          date: "2022-12-15",
          details: "Brake fluid replacement"
        }
      ],
      ownerType: "Third Owner",
      inspection: {
        status: "Passed",
        date: "2024-03-10",
        details: "Full inspection including fluids and brakes."
      }
    },
    {
      imageUri: "https://cdn.pixabay.com/photo/2021/08/20/15/22/honda-civic-si-6560708_1280.jpg",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiCfp8eIe9kDykfydInKGriHmqgElLdScX4BHg0ZfCAMmcGjWiBTdxhvMDrOOwlwqCEE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXsot61nM8QwpieuCoCjRyUr0bA3EXyh7JVW1Fq6d36HhYllsx5UlmIvokYmOlgWtg8A&usqp=CAU",
        "data:image/jpeg;base64,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"
      ],
      title: "Honda Civic",
      description: "Compact car with a sleek design and advanced technology.",
      price: 5556,
      year: 2018,
      mileage: "30,000 miles",
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Chicago, IL",
      seller: "Honda Dealership",
      contact: "555-8765",
      kilometer: 48280,
      color: "White",
      vin: "2HGFC2F59JH000000",
      postedDate: "2024-06-10",
      insurance: {
        provider: "Progressive",
        validUntil: "2025-06-10"
      },
      rc: {
        registrationNumber: "IL-456789",
        expiryDate: "2025-06-10"
      },
      owner: {
        name: "Sarah Lee",
        numberOfPreviousOwners: 1,
        contact: "555-8765"
      },
      serviceHistory: [
        {
          date: "2023-06-05",
          details: "Brake pads replacement"
        },
        {
          date: "2022-11-15",
          details: "Tire rotation and alignment"
        }
      ],
      ownerType: "Second Owner",
      inspection: {
        status: "Passed",
        date: "2024-05-05",
        details: "General maintenance check."
      }
    },
    {
      imageUri: "https://cdn.motor1.com/images/mgl/g4MN9E/s1/chevrolet-malibu.webp",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGRs7nF9mbChMDXUzbaxzC4mAZ6GIefYSWS5AhV57EpmofhctkP-LXfLlxDEZWaIjvWI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkT1fE3ZASe4Lw_h6F97Rhyelcur5BoOkBBvxgiImHTtw8RHx8d8yjMd3fU3H6Rw-OvAA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPE6i6eO8vd1DeKFiHTXk1bvLtsjAnhNBczzRK7-p12ibM2NVNAjN2IfpYA2Y5dcrdKiw&usqp=CAU"
      ],
      title: "Chevrolet Malibu",
      description: "Spacious sedan with modern features and comfort.",
      price: 5545,
      year: 2021,
      mileage: "10,000 miles",
      fuelType: "Hybrid",
      transmission: "Automatic",
      location: "Houston, TX",
      seller: "Chevrolet Dealership",
      contact: "555-4321",
      kilometer: 16093,
      color: "Gray",
      vin: "1G1ZD5ST4MF000000",
      postedDate: "2024-06-05",
      insurance: {
        provider: "Liberty Mutual",
        validUntil: "2025-06-05"
      },
      rc: {
        registrationNumber: "TX-321654",
        expiryDate: "2025-06-05"
      },
      owner: {
        name: "David Brown",
        numberOfPreviousOwners: 0,
        contact: "555-4321"
      },
      serviceHistory: [
        {
          date: "2023-12-10",
          details: "Battery check and replacement"
        },
        {
          date: "2022-05-20",
          details: "Oil change and tire rotation"
        }
      ],
      ownerType: "First Owner",
      inspection: {
        status: "Passed",
        date: "2024-04-10",
        details: "Comprehensive inspection."
      }
    },
    {
      imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02C-3--duubks4iJnd7rSLFGQ7uVxHfaM5g&s",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCaPNRywaTWiVMMymEJXa65n80Wy7-UG7IhfGjlsvDFixMY0uEtIoQ01bT3Ytp1eiMdhY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPcbWXB1Ugbol7yTQrWm-Ks6O5MSDbmVOpkpxPc7NJEh83KQMeZB2V72cAHyhVQoUV78U&usqp=CAU",
        "data:image/jpeg;base64,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"
      ],
      title: "Nissan Altima",
      description: "Mid-size sedan with excellent fuel economy.",
      price:6656,
      year: 2016,
      mileage: "60,000 miles",
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Phoenix, AZ",
      seller: "Nissan Dealership",
      contact: "555-6543",
      kilometer: 96561,
      color: "Silver",
      vin: "1N4AL3AP5GC000000",
      postedDate: "2024-06-02",
      insurance: {
        provider: "Nationwide",
        validUntil: "2025-06-02"
      },
      rc: {
        registrationNumber: "AZ-987654",
        expiryDate: "2025-06-02"
      },
      owner: {
        name: "Chris Martin",
        numberOfPreviousOwners: 1,
        contact: "555-6543"
      },
      serviceHistory: [
        {
          date: "2023-11-15",
          details: "Brake fluid replacement"
        },
        {
          date: "2022-09-10",
          details: "Tire replacement"
        }
      ],
      ownerType: "Second Owner",
      inspection: {
        status: "Passed",
        date: "2024-03-15",
        details: "General maintenance check."
      }
    },
    {
      imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnb6nkqJgzxSl8iwcWOGYJ7GeD7BCoec58ect6iBblOfmCWRK4bCil5mEPpfujvHmZCP0&usqp=CAU",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydM7nk6HrlKVSnEdYP6SdzabjNK-hW5B65L11DWw4QHqwcTmx_VR6nEyFV_YoA8ktvKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rgdoOVGpPH4vo114FG6h04xV1jM-eQkzO7e5ozTLqMwOnY-jyBY-s038JoBAX4kaBQ4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYs3xal1wOjCFaPuRq8OovTRzB3N9i1CREI6A8dE6f9qvGDW9f6DAEI4_AUvU7HcbJJ0o&usqp=CAU"
      ],
      title: "Tesla Model 3",
      description: "Electric car with autopilot features and long range.",
      price: 6565,
      year: 2022,
      mileage: "5,000 miles",
      fuelType: "Electric",
      transmission: "Automatic",
      location: "San Francisco, CA",
      seller: "Tesla Dealership",
      contact: "555-7890",
      kilometer: 8047,
      color: "White",
      vin: "5YJ3E1EA7MF000000",
      postedDate: "2024-05-30",
      insurance: {
        provider: "USAA",
        validUntil: "2025-05-30"
      },
      rc: {
        registrationNumber: "CA-123987",
        expiryDate: "2025-05-30"
      },
      owner: {
        name: "Linda Johnson",
        numberOfPreviousOwners: 0,
        contact: "555-7890"
      },
      serviceHistory: [
        {
          date: "2023-12-20",
          details: "Battery check and software update"
        },
        {
          date: "2022-10-05",
          details: "Tire rotation"
        }
      ],
      ownerType: "First Owner",
      inspection: {
        status: "Passed",
        date: "2024-04-20",
        details: "Full electric system check."
      }
    },
    {
      imageUri: "https://imgd.aeplcdn.com/1280x720/cw/ec/37067/BMW-3-Series-Exterior-167583.jpg?wm=0&q=80",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYncyFXqhO9amUcc4yWcPu5HraOMoETGXqj76UM5sYycPKXOqasSaVH3K0NwkLYLhIjfA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyb7vGD7pM2u666IMAnCLhq09xcpIuoUuN4aRWcWH5UdrT_vgFAT4bZGE8DP5XinBJP3Y&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYncyFXqhO9amUcc4yWcPu5HraOMoETGXqj76UM5sYycPKXOqasSaVH3K0NwkLYLhIjfA&usqp=CAU"
      ],
      title: "BMW 330i",
      description: "Sporty sedan with a turbocharged engine and premium features.",
      price: 2323,
      year: 2020,
      mileage: "20,000 miles",
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Miami, FL",
      seller: "BMW Dealership",
      contact: "555-8764",
      kilometer: 32187,
      color: "Blue",
      vin: "WBA5R1C50LF000000",
      postedDate: "2024-05-25",
      insurance: {
        provider: "Farmers",
        validUntil: "2025-05-25"
      },
      rc: {
        registrationNumber: "FL-789456",
        expiryDate: "2025-05-25"
      },
      owner: {
        name: "Robert White",
        numberOfPreviousOwners: 1,
        contact: "555-8764"
      },
      serviceHistory: [
        {
          date: "2023-08-15",
          details: "Oil change and brake check"
        },
        {
          date: "2022-12-01",
          details: "Tire replacement"
        }
      ],
      ownerType: "Second Owner",
      inspection: {
        status: "Passed",
        date: "2024-03-25",
        details: "General maintenance check."
      }
    },
    {
      imageUri: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2021-12%2Ft81ed9f8_audi-a4-sedan_650x400_06_December_21.jpg&w=640&q=75",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXDxCE2t_Ay9DImbhqNGdn9hUcrJxHhytZJeQOQV-G5MNaRIhFhElsnoiaPhaHGdguW4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrViaCLG7E4oYDuDzkxy_Hcq1_UInHG2eJ6AqG1oDVhLAMIiHX3XfRb8tcGgq1EGfuTw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiB8dePPEaYa6YmkgILi1zfaAGRCrq4O4nSgaoGsATEYq2-h4WLk08BrrM2meLf3SLV8&usqp=CAU"
      ],
      title: "Audi A4",
      description: "Luxury sedan with advanced technology and smooth performance.",
      price: 4554,
      year: 2019,
      mileage: "35,000 miles",
      fuelType: "Diesel",
      transmission: "Automatic",
      location: "Seattle, WA",
      seller: "Audi Dealership",
      contact: "555-3210",
      kilometer: 56327,
      color: "Black",
      vin: "WAUAFAFL3KN000000",
      postedDate: "2024-05-20",
      insurance: {
        provider: "AAA",
        validUntil: "2025-05-20"
      },
      rc: {
        registrationNumber: "WA-456321",
        expiryDate: "2025-05-20"
      },
      owner: {
        name: "Jessica Wilson",
        numberOfPreviousOwners: 1,
        contact: "555-3210"
      },
      serviceHistory: [
        {
          date: "2023-09-10",
          details: "Transmission fluid change"
        },
        {
          date: "2022-11-20",
          details: "Brake pads replacement"
        }
      ],
      ownerType: "Second Owner",
      inspection: {
        status: "Passed",
        date: "2024-04-10",
        details: "Full inspection including fluids and brakes."
      }
    },
    {
      imageUri: "https://media.zigcdn.com/media/content/2019/Dec/kia_optima_k51.jpg",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScu7At-WY08a6LZQbSqQOhmxtwA0bVNah-6ePJ0PbzjwsG6Lol4bbOiHq2jH56iV_cPk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9XZjeJMHnUA5lyJRU3hNAVARMAkciXL3IVdAB4DkCHSHhZrmjM6esHNnNPamRE0Gqpo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyO8FDNHnF4BhIrHNnOQ9L9xyQYOIadeCU2069qmIppPE7EZ4yKRDdS1Mvp_rhbMUSx6M&usqp=CAU"
      ],
      title: "Kia Optima",
      description: "Affordable sedan with reliable performance and good features.",
      price: 1121,
      year: 2017,
      mileage: "45,000 miles",
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Denver, CO",
      seller: "Kia Dealership",
      contact: "555-6542",
      kilometer: 72420,
      color: "Red",
      vin: "5XXGT4L35HG000000",
      postedDate: "2024-05-15",
      insurance: {
        provider: "MetLife",
        validUntil: "2025-05-15"
      },
      rc: {
        registrationNumber: "CO-123789",
        expiryDate: "2025-05-15"
      },
      owner: {
        name: "Emily Davis",
        numberOfPreviousOwners: 2,
        contact: "555-6542"
      },
      serviceHistory: [
        {
          date: "2023-07-01",
          details: "Battery replacement"
        },
        {
          date: "2022-03-20",
          details: "Oil change and tire rotation"
        }
      ],
      ownerType: "Third Owner",
      inspection: {
        status: "Passed",
        date: "2024-03-01",
        details: "Comprehensive check including brakes and engine."
      }
    },
    {
      imageUri: "https://cdn.motor1.com/images/mgl/EZwPw/s3/2020-subaru-outback.jpg",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCv8nASNi9AEVp_4GTi_XXYEORfUnwZg8k8qCHCj2bJZ42-BWjYcBdADEseZ8WoWghUQg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxLsdZ8zDfSg6uIlb98lF4jPuXMuO4V7WVLBLw8YYaFKywoafflnjYbeU9TymctqH8As&usqp=CAU",
        "https://cdn11.bigcommerce.com/s-pusehjx/images/stencil/1280x1280/products/6626/21101/ironman-Outback-woods-profile_1500x1000__93093.1696463105.jpg?c=2"
      ],
      title: "Subaru Outback",
      description: "Versatile SUV with excellent all-wheel drive performance.",
      price: 3434,
      year: 2018,
      mileage: "40,000 miles",
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Portland, OR",
      seller: "Subaru Dealership",
      contact: "555-5431",
      kilometer: 64374,
      color: "Green",
      vin: "4S4BSENC5J3340000",
      postedDate: "2024-05-10",
      insurance: {
        provider: "Travelers",
        validUntil: "2025-05-10"
      },
      rc: {
        registrationNumber: "OR-987123",
        expiryDate: "2025-05-10"
      },
      owner: {
        name: "Mark Thompson",
        numberOfPreviousOwners: 1,
        contact: "555-5431"
      },
      serviceHistory: [
        {
          date: "2023-06-20",
          details: "Brake fluid replacement"
        },
        {
          date: "2022-12-10",
          details: "Tire replacement"
        }
      ],
      ownerType: "Second Owner",
      inspection: {
        status: "Passed",
        date: "2024-04-05",
        details: "General maintenance check."
      }
    },
    {
      imageUri: "https://www.team-bhp.com/sites/default/files/styles/check_high_res/public/2024-hyundai-elantra-n-1.jpg",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5mOLd32N71XyPv1ElSsjtd6Z1XlSC7g_38YFoOfrNqJ-KHquaNUUHTofrCxk0lzlwPk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlFa7PqCxwtXclD-Fc8YBUxhK4RKRVxDQ_6aPZ516gqgoOQs0nL4L__fZ9TOS7PTti0M&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxZJwAtilfsWMsVx-yWqo1-WOcLeNnF_6QBjkmt1wwmQsEidRQEpSrHu5XNIrdfYCg-o&usqp=CAU"
      ],
      title: "Hyundai Elantra",
      description: "Compact sedan with modern design and great features.",
      price: 1212,
      year: 2019,
      mileage: "20,000 miles",
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Austin, TX",
      seller: "Hyundai Dealership",
      contact: "555-4320",
      kilometer: 32187,
      color: "Blue",
      vin: "KMHD84LF7KU000000",
      postedDate: "2024-05-05",
      insurance: {
        provider: "American Family",
        validUntil: "2025-05-05"
      },
      rc: {
        registrationNumber: "TX-321987",
        expiryDate: "2025-05-05"
      },
      owner: {
        name: "Lisa Green",
        numberOfPreviousOwners: 0,
        contact: "555-4320"
      },
      serviceHistory: [
        {
          date: "2023-08-10",
          details: "Oil change and tire rotation"
        },
        {
          date: "2022-11-05",
          details: "Brake fluid replacement"
        }
      ],
      ownerType: "First Owner",
      inspection: {
        status: "Passed",
        date: "2024-03-10",
        details: "Comprehensive maintenance check."
      }
    },
    {
      imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hcN9mUuH-FAjkTmtTzgYc5g-EK3EPyCY3A&s",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBXF80Ky6hXOIlQA_qR6OsaOtjWs_pAi3eGZ_AQOX01x_Vr6QWu2ZvwLEaOI2V8PuFr0&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07vxDTQauZnrhJythpz_xYsO9IoYbHK3Gsf8agzvNVoC3vX-Jp1HnQ3utEu1gCbSPvaI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRRIGmNWD5TdeVv_EYpzaeor9P40x6toJnsBFEgmt0YD-ObGixz5SISyYoh-uYr_Q1-w&usqp=CAU"
      ],
      title: "Mazda Mazda3",
      description: "Sporty compact car with great handling and fuel efficiency.",
      price: 3343,
      year: 2020,
      mileage: "15,000 miles",
      fuelType: "Petrol",
      transmission: "Manual",
      location: "San Diego, CA",
      seller: "Mazda Dealership",
      contact: "555-8763",
      kilometer: 24140,
      color: "Gray",
      vin: "JM1BPALM1L1130000",
      postedDate: "2024-05-01",
      insurance: {
        provider: "Esurance",
        validUntil: "2025-05-01"
      },
      rc: {
        registrationNumber: "CA-123654",
        expiryDate: "2025-05-01"
      },
      owner: {
        name: "Kevin Parker",
        numberOfPreviousOwners: 1,
        contact: "555-8763"
      },
      serviceHistory: [
        {
          date: "2023-10-20",
          details: "Brake pads replacement"
        },
        {
          date: "2022-12-15",
          details: "Oil change and tire rotation"
        }
      ],
      ownerType: "Second Owner",
      inspection: {
        status: "Passed",
        date: "2024-03-15",
        details: "General maintenance check."
      }
    },
    {
      imageUri: "https://cdni.autocarindia.com/ExtraImages/20230602055539_2.jpg",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPl-H5fb5qp8qB1gMPX0hKDNIvX5_UCabYeD-6mliKj8m89sUosqs13l5oFoJlmMVeNU&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJrxntMzKR-PVM6gBQwNMBp3pRnYupEC2IrLODvhB63wNuJa3RRmVALitjBClI44_rTg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMa0wJjeXlbqrehzkUwGNtA2bKyxqal3tqOc6-eHnqcKl1T2dG4PDnT_xUsl-ife4_7JA&usqp=CAU"
      ],
      title: "Volkswagen Golf",
      description: "Compact hatchback with excellent driving dynamics.",
      price: 2323,
      year: 2018,
      mileage: "25,000 miles",
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Atlanta, GA",
      seller: "Volkswagen Dealership",
      contact: "555-3219",
      kilometer: 40234,
      color: "Red",
      vin: "3VW217AU9JM000000",
      postedDate: "2024-04-25",
      insurance: {
        provider: "Geico",
        validUntil: "2025-04-25"
      },
      rc: {
        registrationNumber: "GA-654789",
        expiryDate: "2025-04-25"
      },
      owner: {
        name: "Karen Young",
        numberOfPreviousOwners: 1,
        contact: "555-3219"
      },
      serviceHistory: [
        {
          date: "2023-09-25",
          details: "Brake fluid replacement"
        },
        {
          date: "2022-11-01",
          details: "Tire replacement"
        }
      ],
      ownerType: "Second Owner",
      inspection: {
        status: "Passed",
        date: "2024-03-20",
        details: "General maintenance check."
      }
    },
    {
      imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv23EXE71JozF85jtxhQGhMdl57Ghmdc1fA&s",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqi4twG6NeQeIoBdmiaZ9XfaStTGYwmRYX3dKQGbNOYb6DBXoJ8Rz6TTHNQCyT0GNlnw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzReiZyr1JD3u64MSfTgjAn79Aj-wFfFkzvrGBcEGup8wrL8saAqvpz8_b5IbLUUAu990&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZ8otqM3cgQW9t0qgA3OE_NF-nPirK2MJl9rd2qa3_IRKXasJ0f8E6t6jxBAwtVmin4U&usqp=CAU"
      ],
      title: "Ford F-150",
      description: "Powerful pickup truck with great towing capacity.",
      price: 2323,
      year: 2021,
      mileage: "10,000 miles",
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Dallas, TX",
      seller: "Ford Dealership",
      contact: "555-8762",
      kilometer: 16093,
      color: "Black",
      vin: "1FTFW1E52MFA00000",
      postedDate: "2024-04-20",
      insurance: {
        provider: "State Farm",
        validUntil: "2025-04-20"
      },
      rc: {
        registrationNumber: "TX-321654",
        expiryDate: "2025-04-20"
      },
      owner: {
        name: "Andrew Moore",
        numberOfPreviousOwners: 0,
        contact: "555-8762"
      },
      serviceHistory: [
        {
          date: "2023-10-10",
          details: "Battery check and replacement"
        },
        {
          date: "2022-12-01",
          details: "Tire rotation and alignment"
        }
      ],
      ownerType: "First Owner",
      inspection: {
        status: "Passed",
        date: "2024-04-10",
        details: "Comprehensive maintenance check."
      }
    },
    {
      imageUri: "https://img.etimg.com/photo/msid-74472356,imgsize-623888/%E2%80%8BSomeofitssafetyfeaturesincludedriverandfrontpassengerairbags%2Canti-lockbrakingsystemandhillstartassist..jpg",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBu5-Qwz0PKCp7KGje3yitP_OOY9o-_JUcBsO54-OVCbc12r4s4mcwt7oliPXl6ZOxkhY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrP9BnyN_BJ5kKcSRK-1IA4r_rShqcF4_IAUOUNoD6eXPHu2aFZdo6f8VRvbfXKoMwWY4&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrP9BnyN_BJ5kKcSRK-1IA4r_rShqcF4_IAUOUNoD6eXPHu2aFZdo6f8VRvbfXKoMwWY4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQVb3tz_BMEs6aUY8-IAb5wQRM54tg9sKCdmKpBDMNNsx2V99JU3jc6dcQVqyP16N9J4&usqp=CAU"
      ],
      title: "Jeep Wrangler",
      description: "Off-road capable SUV with rugged design.",
      price:5454,
      year: 2019,
      mileage: "30,000 miles",
      fuelType: "Petrol",
      transmission: "Manual",
      location: "Orlando, FL",
      seller: "Jeep Dealership",
      contact: "555-6541",
      kilometer: 48280,
      color: "Green",
      vin: "1C4HJXDN7KW000000",
      postedDate: "2024-04-15",
      insurance: {
        provider: "Liberty Mutual",
        validUntil: "2025-04-15"
      },
      rc: {
        registrationNumber: "FL-987321",
        expiryDate: "2025-04-15"
      },
      owner: {
        name: "Natalie Garcia",
        numberOfPreviousOwners: 2,
        contact: "555-6541"
      },
      serviceHistory: [
        {
          date: "2023-08-20",
          details: "Brake pads replacement"
        },
        {
          date: "2022-10-10",
          details: "Tire replacement"
        }
      ],
      ownerType: "Third Owner",
      inspection: {
        status: "Passed",
        date: "2024-03-05",
        details: "General maintenance check."
      }
    },
    {
      imageUri: "https://imgd-ct.aeplcdn.com/1280x720/cw/ec/26783/Volvo-XC60-Exterior-114592.jpg?wm=0&q=80",
      additionalImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9jL0BNZfJ6h57olE9MxXTO8V23R5K4jjv5prMcMCM76JNf6LlRdiOwaUOkc704eIc_4c&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfx5aVd1jsg7RZd5ulT8RQ_FS4t5dtiW2gaYFSgpCDUkTizGTo75zbXFDuWHbcQidyoY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTH38XKooN7VH2wEfGBAgFlrxoKmAyfY2vA39_DBI9pDNuzksuvVG0Nvm7t5AumQmg0U&usqp=CAU"
      ],
      title: "Volvo XC60",
      description: "Safe and stylish SUV with advanced safety features.",
      price: 6565,
      year: 2018,
      mileage: "50,000 miles",
      fuelType: "Diesel",
      transmission: "Automatic",
      location: "Charlotte, NC",
      seller: "Volvo Dealership",
      contact: "555-5430",
      kilometer: 80467,
      color: "White",
      vin: "YV4102RL1J1230000",
      postedDate: "2024-04-10",
      insurance: {
        provider: "Progressive",
        validUntil: "2025-04-10"
      },
      rc: {
        registrationNumber: "NC-654123",
        expiryDate: "2025-04-10"
      },
      owner: {
        name: "Sophia Brown",
        numberOfPreviousOwners: 1,
        contact: "555-5430"
      },
      serviceHistory: [
        {
          date: "2023-05-20",
          details: "Oil change and brake fluid replacement"
        },
        {
          date: "2022-09-15",
          details: "Battery replacement"
        }
      ],
      ownerType: "Second Owner",
      inspection: {
        status: "Passed",
        date: "2024-03-15",
        details: "Comprehensive maintenance check."
      }
    },
  ];

  module.exports = cars